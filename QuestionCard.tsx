import React, { useState } from 'react';
import { Question, ExamMode } from './types';
import { BLOCK_METADATA } from './all_questions';
import { Languages, Check, X, Bookmark, BookmarkCheck, Lightbulb, AlertCircle } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  mode: ExamMode;
  selectedOptionId: string | null;
  onSelectOption: (optionId: string) => void;
  isFlagged: boolean;
  onToggleFlag: () => void;
  showAllTranslations: boolean;
  onNext: () => void;
  onPrevious: () => void;
  isFirst: boolean;
  isLast: boolean;
  onFinishExam?: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  mode,
  selectedOptionId,
  onSelectOption,
  isFlagged,
  onToggleFlag,
  showAllTranslations,
  onNext,
  onPrevious,
  isFirst,
  isLast,
  onFinishExam
}) => {
  // Local translation toggles
  const [showQuestionHy, setShowQuestionHy] = useState(false);
  const [showSnippetHy, setShowSnippetHy] = useState(false);
  const [expandedOptionHy, setExpandedOptionHy] = useState<Record<string, boolean>>({});
  const [showExplanationHy, setShowExplanationHy] = useState(false);

  const blockMeta = BLOCK_METADATA[question.block] || {
    name: question.blockName,
    nameArmenian: '',
    color: 'bg-stone-100 text-stone-800 border-stone-300'
  };

  const isAnswered = selectedOptionId !== null;
  const isCorrect = selectedOptionId === question.correctOptionId;
  const isPracticeMode = mode === 'practice';
  const showFeedback = isPracticeMode && isAnswered;

  const toggleOptionTranslation = (optId: string, e: React.MouseEvent) => {
    e.stopPropagation(); // CRITICAL: Do NOT select the option when toggling Armenian translation!
    setExpandedOptionHy(prev => ({
      ...prev,
      [optId]: !prev[optId]
    }));
  };

  const optionLetters = ['A', 'B', 'C', 'D'];

  return (
    <div className="bg-white rounded-3xl border border-stone-200 shadow-md p-5 sm:p-7 transition-all">
      {/* Category / Block Header */}
      <div className="flex items-center justify-between gap-3 flex-wrap mb-4 pb-3 border-b border-stone-100">
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${blockMeta.color}`}>
            Bloque {question.block}: {blockMeta.name}
          </span>
          <span className="text-xs text-stone-500 font-medium">
            {question.subtopic}
          </span>
          {question.difficulty && (
            <span className={`text-[11px] font-medium px-2 py-0.5 rounded-md ${
              question.difficulty === 'facil' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
              question.difficulty === 'medio' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
              'bg-rose-50 text-rose-700 border border-rose-200'
            }`}>
              {question.difficulty === 'facil' ? 'Fácil' : question.difficulty === 'medio' ? 'Medio' : 'Difícil'}
            </span>
          )}
        </div>

        {/* Flag for Review button */}
        <button
          type="button"
          onClick={onToggleFlag}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium border transition-colors ${
            isFlagged
              ? 'bg-amber-100 text-amber-900 border-amber-300 font-semibold'
              : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
          }`}
          title="Marcar pregunta para revisarla después"
        >
          {isFlagged ? (
            <>
              <BookmarkCheck className="w-4 h-4 text-amber-600" />
              <span>Marcada</span>
            </>
          ) : (
            <>
              <Bookmark className="w-4 h-4 text-stone-400" />
              <span>Marcar para revisar</span>
            </>
          )}
        </button>
      </div>

      {/* Text Snippet (if poetry verse, quote or analysed sentence) */}
      {question.textSnippet && (
        <div className="mb-4 p-3.5 sm:p-4 rounded-2xl bg-amber-50/70 border-l-4 border-amber-500 border-stone-200/60 shadow-2xs">
          <div className="flex items-start justify-between gap-2">
            <blockquote className="font-serif-title text-sm sm:text-base text-red-950 font-semibold italic leading-relaxed whitespace-pre-line flex-1">
              {question.textSnippet}
            </blockquote>
            {question.textSnippetArmenian && (
              <button
                type="button"
                onClick={() => setShowSnippetHy(!showSnippetHy)}
                className={`p-1 rounded-md text-xs transition-colors shrink-0 ${
                  showAllTranslations || showSnippetHy
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                }`}
                title="Traducir fragmento al armenio"
              >
                <Languages className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
          {(showAllTranslations || showSnippetHy) && question.textSnippetArmenian && (
            <p className="text-xs sm:text-sm text-amber-900 font-armenian mt-2 pt-2 border-t border-amber-200/80 leading-relaxed">
              {question.textSnippetArmenian}
            </p>
          )}
        </div>
      )}

      {/* Question Text */}
      <div className="mb-6">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-base sm:text-lg font-bold text-stone-900 leading-snug flex-1">
            {question.question}
          </h2>
          <button
            type="button"
            onClick={() => setShowQuestionHy(!showQuestionHy)}
            className={`p-1.5 rounded-lg text-xs font-medium border transition-colors shrink-0 flex items-center gap-1 ${
              showAllTranslations || showQuestionHy
                ? 'bg-orange-500 text-white border-orange-600'
                : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
            }`}
            title="Traducir pregunta al armenio"
          >
            <Languages className="w-4 h-4" />
            <span className="text-[11px] font-armenian hidden sm:inline">Թարգմանել</span>
          </button>
        </div>

        {(showAllTranslations || showQuestionHy) && (
          <div className="mt-2.5 p-2.5 bg-orange-50/80 border border-orange-200 rounded-xl">
            <p className="text-xs sm:text-sm text-stone-800 font-armenian leading-relaxed">
              {question.questionArmenian}
            </p>
          </div>
        )}
      </div>

      {/* Answer Options A - D */}
      <div className="space-y-3 mb-6">
        {question.options.map((option, idx) => {
          const letter = optionLetters[idx] || `${idx + 1}`;
          const isSelected = selectedOptionId === option.id;
          const isCorrectOption = option.id === question.correctOptionId;
          const isOptionHyOpen = showAllTranslations || !!expandedOptionHy[option.id];

          // Styling logic
          let optionStyles = 'border-stone-200 bg-white hover:border-red-300 hover:bg-red-50/30 text-stone-800';
          let letterStyles = 'bg-stone-100 text-stone-700 border-stone-300';

          if (showFeedback) {
            if (isCorrectOption) {
              optionStyles = 'border-emerald-500 bg-emerald-50/80 text-emerald-950 ring-1 ring-emerald-500';
              letterStyles = 'bg-emerald-600 text-white border-emerald-700';
            } else if (isSelected && !isCorrect) {
              optionStyles = 'border-rose-400 bg-rose-50/70 text-rose-950 ring-1 ring-rose-400';
              letterStyles = 'bg-rose-600 text-white border-rose-700';
            } else {
              optionStyles = 'border-stone-200 bg-stone-50/50 text-stone-400 opacity-70';
            }
          } else if (isSelected) {
            optionStyles = 'border-red-800 bg-red-50/80 text-red-950 ring-2 ring-red-800 shadow-xs';
            letterStyles = 'bg-red-900 text-white border-red-950';
          }

          return (
            <div
              key={option.id}
              onClick={() => onSelectOption(option.id)}
              className={`relative rounded-2xl border-2 p-3.5 sm:p-4 cursor-pointer transition-all ${optionStyles}`}
            >
              <div className="flex items-start justify-between gap-3">
                {/* Letter badge + Option Text */}
                <div className="flex items-start gap-3 flex-1">
                  <span className={`w-7 h-7 shrink-0 rounded-xl flex items-center justify-center font-bold text-xs border ${letterStyles}`}>
                    {letter}
                  </span>
                  <div className="flex-1 pt-0.5">
                    <p className="text-sm sm:text-base font-medium leading-relaxed">
                      {option.text}
                    </p>
                  </div>
                </div>

                {/* Translation button (safe zone with stopPropagation) */}
                <div className="flex items-center gap-1.5 shrink-0 ml-2">
                  {showFeedback && isCorrectOption && (
                    <span className="p-1 bg-emerald-100 text-emerald-700 rounded-lg" title="Opción correcta">
                      <Check className="w-4 h-4 stroke-[2.5]" />
                    </span>
                  )}
                  {showFeedback && isSelected && !isCorrect && (
                    <span className="p-1 bg-rose-100 text-rose-700 rounded-lg" title="Opción incorrecta">
                      <X className="w-4 h-4 stroke-[2.5]" />
                    </span>
                  )}

                  <button
                    type="button"
                    onClick={(e) => toggleOptionTranslation(option.id, e)}
                    className={`p-1.5 rounded-lg text-xs transition-colors flex items-center gap-1 ${
                      isOptionHyOpen
                        ? 'bg-orange-500 text-white shadow-2xs'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200 border border-stone-200'
                    }`}
                    title="Ver traducción en armenio de esta opción"
                  >
                    <Languages className="w-3.5 h-3.5" />
                    <span className="text-[10px] hidden sm:inline font-armenian">Հայ</span>
                  </button>
                </div>
              </div>

              {/* Armenian Option Translation */}
              {isOptionHyOpen && (
                <div className="mt-2.5 pt-2 border-t border-stone-200/80 text-xs sm:text-sm text-stone-700 font-armenian leading-relaxed bg-amber-50/40 p-2 rounded-xl">
                  {option.textArmenian}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Practice Mode Instant Explanation Box */}
      {showFeedback && (
        <div className={`rounded-2xl p-4 sm:p-5 mb-6 border-2 transition-all ${
          isCorrect
            ? 'bg-emerald-50/90 border-emerald-300'
            : 'bg-amber-50/90 border-amber-300'
        }`}>
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              {isCorrect ? (
                <span className="p-1.5 rounded-xl bg-emerald-600 text-white">
                  <Check className="w-5 h-5 stroke-[3]" />
                </span>
              ) : (
                <span className="p-1.5 rounded-xl bg-rose-600 text-white">
                  <AlertCircle className="w-5 h-5 stroke-[2.5]" />
                </span>
              )}
              <h4 className="font-bold text-sm sm:text-base text-stone-900">
                {isCorrect ? '¡Correcto!' : 'Respuesta incorrecta'}
              </h4>
            </div>

            <button
              type="button"
              onClick={() => setShowExplanationHy(!showExplanationHy)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium border flex items-center gap-1 transition-colors ${
                showAllTranslations || showExplanationHy
                  ? 'bg-orange-500 text-white border-orange-600'
                  : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
              }`}
              title="Traducir explicación al armenio"
            >
              <Languages className="w-3.5 h-3.5" />
              <span className="font-armenian text-xs">Բացատրություն</span>
            </button>
          </div>

          {/* Spanish explanation */}
          <div className="text-xs sm:text-sm text-stone-800 leading-relaxed space-y-1.5">
            <p className="font-medium text-stone-900">
              <span className="font-bold">Explicación:</span> {question.explanation}
            </p>
          </div>

          {/* Armenian explanation */}
          {(showAllTranslations || showExplanationHy) && (
            <div className="mt-3 pt-3 border-t border-amber-200/80 bg-white/70 p-3 rounded-xl">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-900 mb-1">
                <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                <span className="font-armenian">Բացատրություն հայերենով:</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-800 font-armenian leading-relaxed">
                {question.explanationArmenian}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between gap-3 pt-4 border-t border-stone-100">
        <button
          type="button"
          onClick={onPrevious}
          disabled={isFirst}
          className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-stone-300 text-stone-700 hover:bg-stone-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          ← Anterior
        </button>

        <div className="text-xs text-stone-500 font-medium hidden sm:block">
          Usa las flechas para navegar
        </div>

        {isLast ? (
          <button
            type="button"
            onClick={onFinishExam}
            className="px-5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-red-800 to-rose-900 text-white shadow-xs hover:from-red-900 hover:to-rose-950 transition-all"
          >
            Finalizar examen ✓
          </button>
        ) : (
          <button
            type="button"
            onClick={onNext}
            className="px-5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-red-900 hover:bg-red-950 text-white shadow-xs transition-all"
          >
            Siguiente →
          </button>
        )}
      </div>
    </div>
  );
};
