import React, { useState } from 'react';
import { SavedMistake, Question } from './types';
import { getQuestionById, BLOCK_METADATA } from './all_questions';
import { removeMistake, clearAllMistakes } from './storage';
import { AlertTriangle, Play, Trash2, ArrowLeft, Languages } from 'lucide-react';

interface MistakesViewProps {
  mistakes: SavedMistake[];
  onStartMistakesExam: (mistakeIds: string[]) => void;
  onBackToMenu: () => void;
  onRefreshMistakes: () => void;
}

export const MistakesView: React.FC<MistakesViewProps> = ({
  mistakes,
  onStartMistakesExam,
  onBackToMenu,
  onRefreshMistakes
}) => {
  const [showArmenian, setShowArmenian] = useState(false);

  const mistakeQuestions: Array<{
    mistake: SavedMistake;
    question: Question;
  }> = [];

  mistakes.forEach(m => {
    const q = getQuestionById(m.questionId);
    if (q) {
      mistakeQuestions.push({ mistake: m, question: q });
    }
  });

  const handleRemoveOne = (qId: string) => {
    removeMistake(qId);
    onRefreshMistakes();
  };

  const handleClearAll = () => {
    if (window.confirm('¿Deseas vaciar toda tu lista de errores guardados?')) {
      clearAllMistakes();
      onRefreshMistakes();
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Top Bar */}
      <div className="flex items-center justify-between gap-4 flex-wrap mb-6 pb-4 border-b border-stone-200">
        <button
          onClick={onBackToMenu}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al menú</span>
        </button>

        <div className="text-center sm:text-right">
          <h2 className="font-serif-title font-bold text-red-950 text-xl flex items-center justify-center sm:justify-end gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            <span>Mis Errores Guardados</span>
          </h2>
          <p className="text-xs text-stone-500 font-armenian">
            Իմ սխալները՝ կրկնելու և ամրապնդելու համար
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowArmenian(!showArmenian)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold border flex items-center gap-1.5 transition-colors ${
              showArmenian ? 'bg-orange-500 text-white border-orange-600' : 'bg-white text-stone-700 border-stone-300'
            }`}
          >
            <Languages className="w-4 h-4" />
            <span className="font-armenian">Հայերեն</span>
          </button>
        </div>
      </div>

      {mistakeQuestions.length === 0 ? (
        <div className="bg-white rounded-3xl border border-stone-200 p-12 text-center shadow-xs">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
            <AlertTriangle className="w-8 h-8 text-emerald-500" />
          </div>
          <h3 className="text-lg font-bold text-stone-900 mb-1">
            ¡No tienes errores pendientes!
          </h3>
          <p className="text-sm text-stone-500 mb-2">
            Cada vez que falles una pregunta en un examen, se guardará aquí automáticamente para que puedas practicarla.
          </p>
          <p className="text-xs text-stone-400 font-armenian mb-6">
            Դուք դեռ չունեք չյուրացված սխալներ:
          </p>
          <button
            onClick={onBackToMenu}
            className="px-6 py-2.5 bg-red-900 hover:bg-red-950 text-white font-bold text-sm rounded-xl transition-all shadow-xs"
          >
            Comenzar un examen
          </button>
        </div>
      ) : (
        <>
          {/* Action Header Card */}
          <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-red-50 border border-amber-300 rounded-3xl p-6 shadow-sm mb-6 flex items-center justify-between gap-4 flex-wrap">
            <div>
              <div className="text-sm font-bold text-amber-950 mb-0.5">
                Tienes {mistakeQuestions.length} pregunta(s) para reforzar
              </div>
              <p className="text-xs text-stone-600 font-armenian">
                Ստեղծիր հատուկ քննություն միայն այս հարցերից՝ դրանք յուրացնելու համար:
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onStartMistakesExam(mistakes.map(m => m.questionId))}
                className="px-5 py-2.5 bg-gradient-to-r from-red-900 to-rose-900 hover:from-red-950 hover:to-rose-950 text-white font-bold text-sm rounded-xl shadow-md flex items-center gap-2 transition-all"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Practicar todos mis errores</span>
              </button>

              <button
                onClick={handleClearAll}
                className="p-2.5 text-stone-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors border border-stone-200 bg-white"
                title="Vaciar toda la lista de errores"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* List of Questions */}
          <div className="space-y-4">
            {mistakeQuestions.map(({ mistake, question }) => {
              const blockMeta = BLOCK_METADATA[question.block] || { name: question.blockName, color: 'bg-stone-100' };
              return (
                <div
                  key={question.id}
                  className="bg-white rounded-2xl border border-stone-200 p-4 sm:p-5 shadow-xs hover:border-amber-300 transition-all"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${blockMeta.color}`}>
                        Bloque {question.block}: {blockMeta.name}
                      </span>
                      <span className="text-xs text-stone-500 font-medium">
                        {question.subtopic}
                      </span>
                      <span className="text-[11px] font-mono text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-md">
                        Fallado {mistake.failedTimes} vez{mistake.failedTimes > 1 ? 'es' : ''}
                      </span>
                    </div>

                    <button
                      onClick={() => handleRemoveOne(question.id)}
                      className="text-xs text-stone-400 hover:text-emerald-700 font-medium px-2 py-1 rounded-lg hover:bg-emerald-50 transition-colors"
                      title="Quitar de errores (ya dominado)"
                    >
                      ✓ Dominada
                    </button>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-stone-900 mb-1">
                    {question.question}
                  </h4>

                  {showArmenian && (
                    <p className="text-xs text-stone-700 font-armenian bg-orange-50 p-2 rounded-lg mb-2">
                      {question.questionArmenian}
                    </p>
                  )}

                  {question.textSnippet && (
                    <blockquote className="text-xs italic text-red-950 font-serif-title bg-amber-50/60 p-2 rounded-lg border-l-2 border-amber-400 my-2">
                      {question.textSnippet}
                    </blockquote>
                  )}

                  {/* Explication Preview */}
                  <div className="text-xs text-stone-600 bg-stone-50 p-2.5 rounded-xl border border-stone-100 mt-2">
                    <span className="font-bold text-stone-800">Respuesta correcta: </span>
                    <span>
                      {question.options.find(o => o.id === question.correctOptionId)?.text}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
