import React, { useState } from 'react';
import { ReadingPassage } from './types';
import { BookMarked, ChevronDown, ChevronUp, Languages } from 'lucide-react';

interface ReadingCardProps {
  passage: ReadingPassage;
  showAllTranslations: boolean;
}

export const ReadingCard: React.FC<ReadingCardProps> = ({ passage, showAllTranslations }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedSentences, setExpandedSentences] = useState<Record<number, boolean>>({});

  const toggleSentence = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedSentences(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <div className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-4 sm:p-5 shadow-xs mb-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-200/80 text-amber-900 border border-amber-300">
              <BookMarked className="w-3.5 h-3.5" />
              <span>{passage.genre}</span>
            </span>
            <span className="text-xs text-stone-500 font-armenian">
              ({passage.genreArmenian})
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-red-950 font-serif-title">
            {passage.title}
          </h3>
          {(showAllTranslations || true) && (
            <p className="text-xs text-amber-900 font-armenian mt-0.5">
              {passage.titleArmenian}
            </p>
          )}
        </div>

        <button
          type="button"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-stone-500 hover:text-stone-900 p-1.5 rounded-lg hover:bg-amber-100 transition-colors"
          title={isCollapsed ? 'Expandir texto completo' : 'Plegar texto'}
        >
          {isCollapsed ? <ChevronDown className="w-5 h-5" /> : <ChevronUp className="w-5 h-5" />}
        </button>
      </div>

      {/* Description */}
      {!isCollapsed && (
        <>
          <p className="text-xs text-stone-600 italic border-l-2 border-amber-400 pl-2.5 my-2.5">
            {passage.description}
          </p>

          {/* Text Sentences */}
          <div className="space-y-2 mt-3 pt-3 border-t border-amber-200/60">
            {passage.sentences.map((sent, idx) => {
              const isOpen = showAllTranslations || !!expandedSentences[idx];
              return (
                <div
                  key={idx}
                  className="p-2 rounded-xl bg-white/80 border border-amber-100 hover:border-amber-300 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm leading-relaxed text-stone-800 flex-1">
                      {sent.es}
                    </p>
                    <button
                      type="button"
                      onClick={(e) => toggleSentence(idx, e)}
                      className={`shrink-0 p-1 rounded-md text-xs transition-colors flex items-center gap-1 ${
                        isOpen
                          ? 'bg-orange-500 text-white'
                          : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                      }`}
                      title="Traducir esta oración al armenio"
                    >
                      <Languages className="w-3.5 h-3.5" />
                      <span className="text-[10px] hidden sm:inline font-armenian">Հայ</span>
                    </button>
                  </div>

                  {isOpen && (
                    <p className="text-xs text-amber-900 font-armenian mt-1.5 pt-1.5 border-t border-amber-100/80 leading-relaxed bg-amber-50/50 p-1.5 rounded-lg">
                      {sent.hy}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
