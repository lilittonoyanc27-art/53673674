import React, { useState } from 'react';
import { ExamResult, Question } from './types';
import { getQuestionById, BLOCK_METADATA } from './all_questions';
import { ArrowLeft, Check, X, Languages, Lightbulb } from 'lucide-react';

interface ReviewViewProps {
  result: ExamResult;
  onBackToResults: () => void;
}

export const ReviewView: React.FC<ReviewViewProps> = ({ result, onBackToResults }) => {
  const [filter, setFilter] = useState<'all' | 'mistakes' | 'correct'>('all');
  const [selectedBlock, setSelectedBlock] = useState<number | 'all'>('all');
  const [showAllTranslations, setShowAllTranslations] = useState(false);
  const [expandedArmenian, setExpandedArmenian] = useState<Record<string, boolean>>({});

  const toggleArmenian = (qId: string) => {
    setExpandedArmenian(prev => ({
      ...prev,
      [qId]: !prev[qId]
    }));
  };

  const optionLetters = ['A', 'B', 'C', 'D'];

  // Retrieve questions
  const questionsWithAnswers: Array<{
    question: Question;
    selectedOptionId: string | null;
    isCorrect: boolean;
  }> = [];

  Object.entries(result.answers).forEach(([qId, ans]) => {
    const q = getQuestionById(qId);
    if (q) {
      questionsWithAnswers.push({
        question: q,
        selectedOptionId: ans.selectedOptionId,
        isCorrect: ans.isCorrect
      });
    }
  });

  // Filter list
  const filtered = questionsWithAnswers.filter(item => {
    if (filter === 'mistakes' && item.isCorrect) return false;
    if (filter === 'correct' && !item.isCorrect) return false;
    if (selectedBlock !== 'all' && item.question.block !== selectedBlock) return false;
    return true;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Top Header */}
      <div className="flex items-center justify-between gap-4 flex-wrap mb-6 pb-4 border-b border-stone-200">
        <button
          onClick={onBackToResults}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a los resultados</span>
        </button>

        <div className="text-center sm:text-right">
          <h2 className="font-serif-title font-bold text-red-950 text-lg">
            Revisión de respuestas
          </h2>
          <p className="text-xs text-stone-500 font-armenian">
            Պատասխանների մանրամասն վերլուծություն և բացատրություններ
          </p>
        </div>

        <button
          onClick={() => setShowAllTranslations(!showAllTranslations)}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold border flex items-center gap-1.5 transition-colors ${
            showAllTranslations
              ? 'bg-orange-500 text-white border-orange-600 shadow-xs'
              : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
          }`}
        >
          <Languages className="w-4 h-4" />
          <span className="font-armenian">
            {showAllTranslations ? 'Հայերեն (բոլորը բացված)' : 'Բացել բոլոր թարգմանությունները'}
          </span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 flex-wrap mb-6">
        <div className="inline-flex rounded-xl bg-stone-100 p-1 border border-stone-200">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              filter === 'all' ? 'bg-white text-red-950 shadow-xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Todas ({questionsWithAnswers.length})
          </button>
          <button
            onClick={() => setFilter('mistakes')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              filter === 'mistakes' ? 'bg-rose-600 text-white shadow-xs' : 'text-stone-600 hover:text-rose-700'
            }`}
          >
            Errores ({result.incorrectCount})
          </button>
          <button
            onClick={() => setFilter('correct')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              filter === 'correct' ? 'bg-emerald-600 text-white shadow-xs' : 'text-stone-600 hover:text-emerald-700'
            }`}
          >
            Aciertos ({result.correctCount})
          </button>
        </div>

        {/* Block Dropdown */}
        <select
          value={selectedBlock}
          onChange={(e) => setSelectedBlock(e.target.value === 'all' ? 'all' : Number(e.target.value))}
          className="text-xs bg-white border border-stone-200 rounded-xl px-3 py-1.5 font-medium text-stone-700 focus:outline-none focus:ring-2 focus:ring-red-800"
        >
          <option value="all">Filtrar por todos los bloques</option>
          {Object.entries(BLOCK_METADATA).map(([num, meta]) => (
            <option key={num} value={num}>
              Bloque {num}: {meta.name}
            </option>
          ))}
        </select>
      </div>

      {/* Questions list */}
      <div className="space-y-6">
        {filtered.map((item, index) => {
          const { question, selectedOptionId, isCorrect } = item;
          const isArmenianOpen = showAllTranslations || !!expandedArmenian[question.id];
          const blockMeta = BLOCK_METADATA[question.block] || { name: question.blockName, color: 'bg-stone-100' };

          return (
            <div
              key={question.id}
              className={`bg-white rounded-3xl border-2 p-5 sm:p-6 shadow-sm transition-all ${
                isCorrect ? 'border-emerald-200' : 'border-rose-200'
              }`}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between gap-3 flex-wrap mb-3">
                <div className="flex items-center gap-2">
                  <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs text-white ${
                    isCorrect ? 'bg-emerald-600' : 'bg-rose-600'
                  }`}>
                    {isCorrect ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : <X className="w-3.5 h-3.5 stroke-[3]" />}
                  </span>
                  <span className="text-xs font-bold text-stone-900">
                    Pregunta #{index + 1}
                  </span>
                  <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${blockMeta.color}`}>
                    Bloque {question.block}: {blockMeta.name}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => toggleArmenian(question.id)}
                  className={`px-2 py-1 rounded-lg text-xs font-medium border flex items-center gap-1 transition-colors ${
                    isArmenianOpen
                      ? 'bg-orange-500 text-white border-orange-600'
                      : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  <Languages className="w-3.5 h-3.5" />
                  <span className="font-armenian text-xs">Հայերեն</span>
                </button>
              </div>

              {/* Text Snippet if any */}
              {question.textSnippet && (
                <div className="mb-3 p-3 rounded-xl bg-amber-50 border-l-4 border-amber-400 text-xs sm:text-sm font-semibold italic text-red-950 font-serif-title">
                  {question.textSnippet}
                  {isArmenianOpen && question.textSnippetArmenian && (
                    <div className="text-xs text-amber-900 font-armenian font-normal not-italic mt-1 pt-1 border-t border-amber-200">
                      {question.textSnippetArmenian}
                    </div>
                  )}
                </div>
              )}

              {/* Question Text */}
              <h3 className="font-bold text-sm sm:text-base text-stone-900 mb-1">
                {question.question}
              </h3>
              {isArmenianOpen && (
                <p className="text-xs sm:text-sm text-stone-700 font-armenian mb-3 bg-orange-50/70 p-2 rounded-lg">
                  {question.questionArmenian}
                </p>
              )}

              {/* Options Breakdown */}
              <div className="space-y-2 my-4">
                {question.options.map((opt, optIdx) => {
                  const letter = optionLetters[optIdx] || `${optIdx + 1}`;
                  const isSelected = selectedOptionId === opt.id;
                  const isCorrectAnswer = opt.id === question.correctOptionId;

                  let rowStyle = 'bg-stone-50/60 border-stone-200 text-stone-700';
                  let badge = null;

                  if (isCorrectAnswer) {
                    rowStyle = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-semibold ring-1 ring-emerald-400';
                    badge = <span className="text-[10px] bg-emerald-600 text-white font-bold px-2 py-0.5 rounded-full">Correcta</span>;
                  } else if (isSelected && !isCorrectAnswer) {
                    rowStyle = 'bg-rose-50 border-rose-300 text-rose-950 ring-1 ring-rose-300';
                    badge = <span className="text-[10px] bg-rose-600 text-white font-bold px-2 py-0.5 rounded-full">Tu elección</span>;
                  }

                  return (
                    <div
                      key={opt.id}
                      className={`p-2.5 sm:p-3 rounded-xl border text-xs sm:text-sm flex flex-col gap-1 ${rowStyle}`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 flex-1">
                          <span className="w-5 h-5 rounded-md bg-white border border-stone-300 flex items-center justify-center font-bold text-[11px] shrink-0 text-stone-800">
                            {letter}
                          </span>
                          <span className="leading-snug">{opt.text}</span>
                        </div>
                        {badge}
                      </div>

                      {isArmenianOpen && (
                        <p className="text-[11px] sm:text-xs text-stone-600 font-armenian pl-7 pt-1 border-t border-stone-100">
                          {opt.textArmenian}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Detailed Explanation */}
              <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs sm:text-sm space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-amber-950">
                  <Lightbulb className="w-4 h-4 text-amber-600" />
                  <span>Explicación didáctica:</span>
                </div>
                <p className="text-stone-800 leading-relaxed">
                  {question.explanation}
                </p>

                {isArmenianOpen && (
                  <div className="pt-2 border-t border-amber-200/80">
                    <div className="text-[11px] font-bold text-amber-900 font-armenian mb-0.5">
                      Հայերեն բացատրություն.
                    </div>
                    <p className="text-stone-800 font-armenian leading-relaxed text-xs">
                      {question.explanationArmenian}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
