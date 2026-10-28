import React, { useState } from 'react';
import { Bookmark, Check, X } from 'lucide-react';

interface QuestionPaletteProps {
  totalQuestions: number;
  currentIndex: number;
  answers: Record<string, string>;
  flags: Record<string, boolean>;
  questionIds: string[];
  onSelectIndex: (index: number) => void;
  onClose: () => void;
}

export const QuestionPalette: React.FC<QuestionPaletteProps> = ({
  totalQuestions,
  currentIndex,
  answers,
  flags,
  questionIds,
  onSelectIndex,
  onClose
}) => {
  const [filter, setFilter] = useState<'all' | 'unanswered' | 'flagged'>('all');

  const answeredCount = questionIds.filter(id => answers[id] !== undefined && answers[id] !== null).length;
  const flaggedCount = questionIds.filter(id => flags[id]).length;
  const unansweredCount = totalQuestions - answeredCount;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-2xl rounded-3xl border border-stone-200 shadow-2xl p-5 sm:p-6 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-200">
          <div>
            <h3 className="font-serif-title font-bold text-red-950 text-base sm:text-lg">
              Mapa de preguntas
            </h3>
            <p className="text-xs text-stone-500">
              {answeredCount} respondidas • {unansweredCount} sin responder • {flaggedCount} marcadas
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 my-3">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
              filter === 'all'
                ? 'bg-red-900 text-white'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            Todas ({totalQuestions})
          </button>
          <button
            onClick={() => setFilter('unanswered')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
              filter === 'unanswered'
                ? 'bg-amber-600 text-white'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            Sin responder ({unansweredCount})
          </button>
          <button
            onClick={() => setFilter('flagged')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
              filter === 'flagged'
                ? 'bg-amber-500 text-white'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            Marcadas ({flaggedCount})
          </button>
        </div>

        {/* Question Grid */}
        <div className="flex-1 overflow-y-auto pr-1 py-2">
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
            {questionIds.map((qId, idx) => {
              const isCurrent = idx === currentIndex;
              const isAnswered = answers[qId] !== undefined && answers[qId] !== null;
              const isFlagged = flags[qId];

              // Filtering
              if (filter === 'unanswered' && isAnswered) return null;
              if (filter === 'flagged' && !isFlagged) return null;

              let btnStyle = 'border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100';
              if (isAnswered) {
                btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold';
              }
              if (isCurrent) {
                btnStyle = 'border-red-900 bg-red-900 text-white font-bold ring-2 ring-red-400';
              }

              return (
                <button
                  key={qId}
                  onClick={() => {
                    onSelectIndex(idx);
                    onClose();
                  }}
                  className={`relative h-10 rounded-xl border flex items-center justify-center text-xs transition-all ${btnStyle}`}
                >
                  <span>{idx + 1}</span>

                  {/* Flag indicator */}
                  {isFlagged && (
                    <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-500 text-white rounded-full flex items-center justify-center">
                      <Bookmark className="w-2.5 h-2.5 fill-current" />
                    </span>
                  )}

                  {/* Answered check */}
                  {isAnswered && !isCurrent && (
                    <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-600 text-white rounded-full flex items-center justify-center">
                      <Check className="w-2 h-2 stroke-[3]" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Legend */}
        <div className="pt-3 border-t border-stone-200 flex items-center justify-between text-[11px] text-stone-500 flex-wrap gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-red-900" />
            <span>Actual</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-emerald-100 border border-emerald-400" />
            <span>Respondida</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-amber-500" />
            <span>Marcada</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-stone-100 border border-stone-300" />
            <span>Sin responder</span>
          </div>
        </div>
      </div>
    </div>
  );
};
