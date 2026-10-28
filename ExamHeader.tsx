import React from 'react';
import { ExamMode, ExamFilter } from './types';
import { Clock, BookOpen, CheckCircle2, Languages, LogOut } from 'lucide-react';

interface ExamHeaderProps {
  mode: ExamMode;
  filter: ExamFilter;
  currentIndex: number;
  totalQuestions: number;
  answeredCount: number;
  elapsedSeconds: number;
  showAllTranslations: boolean;
  onToggleTranslations: () => void;
  onFinishExam: () => void;
  onQuitExam: () => void;
  onTogglePalette?: () => void;
  isPaletteOpen?: boolean;
}

export const ExamHeader: React.FC<ExamHeaderProps> = ({
  mode,
  filter,
  currentIndex,
  totalQuestions,
  answeredCount,
  elapsedSeconds,
  showAllTranslations,
  onToggleTranslations,
  onFinishExam,
  onQuitExam,
  onTogglePalette,
  isPaletteOpen
}) => {
  const formatTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const getFilterTitle = (f: ExamFilter) => {
    switch (f) {
      case 'mini_20': return 'Mini examen (20)';
      case 'normal_50': return 'Examen normal (50)';
      case 'large_100': return 'Examen largo (100)';
      case 'all_200': return 'Examen completo (200)';
      case 'figuras': return 'Figuras literarias';
      case 'literatura': return 'Literatura (Popular y culta)';
      case 'gramatica': return 'Categorías gramaticales';
      case 'comprension': return 'Comprensión lectora';
      case 'comunicacion': return 'Funciones y comunicación';
      case 'errores': return 'Práctica de mis errores';
      default: return 'Examen escolar';
    }
  };

  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 py-2.5 sm:py-3">
        <div className="flex items-center justify-between gap-2 sm:gap-4 flex-wrap sm:flex-nowrap">
          {/* Left: Title & Mode */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onQuitExam}
              className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-colors"
              title="Salir al menú principal"
            >
              <LogOut className="w-5 h-5" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif-title font-bold text-red-950 text-sm sm:text-base tracking-wide">
                  1.º ESO — Lengua Castellana
                </span>
                <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${
                  mode === 'practice'
                    ? 'bg-amber-50 text-amber-900 border-amber-300'
                    : 'bg-rose-50 text-rose-900 border-rose-300'
                }`}>
                  {mode === 'practice' ? 'Modo Práctica' : 'Modo Examen'}
                </span>
              </div>
              <div className="text-xs text-stone-500 flex items-center gap-2">
                <span>{getFilterTitle(filter)}</span>
                <span>•</span>
                <span className="font-medium text-stone-700">
                  Pregunta {currentIndex + 1} de {totalQuestions}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Timer, Translation toggle & Actions */}
          <div className="flex items-center gap-2 sm:gap-3 ml-auto">
            {/* Timer */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-stone-100 text-stone-700 rounded-lg text-xs font-mono font-medium">
              <Clock className="w-3.5 h-3.5 text-stone-500" />
              <span>{formatTime(elapsedSeconds)}</span>
            </div>

            {/* Armenian Translation Toggle Button */}
            <button
              type="button"
              onClick={onToggleTranslations}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border transition-all ${
                showAllTranslations
                  ? 'bg-orange-500 text-white border-orange-600 shadow-xs'
                  : 'bg-stone-50 text-stone-700 border-stone-300 hover:bg-stone-100'
              }`}
              title="Mostrar u ocultar todas las traducciones al armenio"
            >
              <Languages className="w-3.5 h-3.5" />
              <span className="hidden sm:inline font-armenian">
                {showAllTranslations ? 'Հայերեն (Բաց)' : 'Հայերեն (Փակ)'}
              </span>
              <span className="sm:hidden">🇦🇲</span>
            </button>

            {/* Question Palette button */}
            {onTogglePalette && (
              <button
                type="button"
                onClick={onTogglePalette}
                className={`p-1.5 rounded-lg border text-xs font-medium transition-colors ${
                  isPaletteOpen
                    ? 'bg-red-900 text-white border-red-950'
                    : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-100'
                }`}
                title="Abrir mapa de preguntas"
              >
                <BookOpen className="w-4 h-4" />
              </button>
            )}

            {/* Finish Button */}
            <button
              type="button"
              onClick={onFinishExam}
              className="px-3 py-1.5 bg-gradient-to-r from-red-900 to-rose-900 text-white text-xs font-semibold rounded-lg shadow-xs hover:from-red-950 hover:to-rose-950 transition-all flex items-center gap-1.5"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Entregar</span>
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-2 w-full bg-stone-100 rounded-full h-1.5 overflow-hidden">
          <div
            className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-800 h-1.5 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </header>
  );
};
