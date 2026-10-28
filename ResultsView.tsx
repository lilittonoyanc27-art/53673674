import React from 'react';
import { ExamResult } from './types';
import { Award, Clock, CheckCircle2, XCircle, HelpCircle, RotateCcw, AlertTriangle, ArrowRight, Home } from 'lucide-react';

interface ResultsViewProps {
  result: ExamResult;
  onReviewAnswers: () => void;
  onPracticeMistakes: () => void;
  onRetryExam: () => void;
  onBackToMenu: () => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({
  result,
  onReviewAnswers,
  onPracticeMistakes,
  onRetryExam,
  onBackToMenu
}) => {
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins} min ${s} seg`;
  };

  const getGradeRating = (score: number) => {
    if (score >= 9) return { label: 'Sobresaliente', labelArmenian: 'Գերազանց', color: 'text-emerald-700 bg-emerald-50 border-emerald-300' };
    if (score >= 7) return { label: 'Notable', labelArmenian: 'Լավ / Շատ լավ', color: 'text-blue-700 bg-blue-50 border-blue-300' };
    if (score >= 6) return { label: 'Bien', labelArmenian: 'Բավարարից բարձր', color: 'text-amber-700 bg-amber-50 border-amber-300' };
    if (score >= 5) return { label: 'Suficiente (Aprobado)', labelArmenian: 'Բավարար (դրական)', color: 'text-orange-700 bg-orange-50 border-orange-300' };
    return { label: 'Insuficiente (A reforzar)', labelArmenian: 'Անբավարար (կրկնել է պետք)', color: 'text-rose-700 bg-rose-50 border-rose-300' };
  };

  const rating = getGradeRating(result.scoreOn10);

  // Identify strengths and weaknesses
  const strongBlocks = result.blockStats.filter(b => b.total > 0 && b.percentage >= 70);
  const weakBlocks = result.blockStats.filter(b => b.total > 0 && b.percentage < 60);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Top Banner */}
      <div className="bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden mb-8">
        <div className="bg-gradient-to-r from-red-950 via-red-900 to-rose-900 text-white p-6 sm:p-8 text-center relative">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-white/10 backdrop-blur-md mb-3 border border-white/20">
            <Award className="w-8 h-8 text-amber-300" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold font-serif-title tracking-wide mb-1">
            RESULTADOS DEL EXAMEN
          </h1>
          <p className="text-amber-200 text-xs sm:text-sm font-armenian">
            Քննության արդյունքները և մանրամասն գնահատականը
          </p>

          {/* Big Score Card */}
          <div className="mt-6 inline-block bg-white text-stone-900 rounded-3xl p-5 sm:px-10 shadow-xl border-4 border-amber-400">
            <div className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-1">
              Nota escolar (sobre 10)
            </div>
            <div className="text-4xl sm:text-6xl font-black text-red-950 tracking-tight">
              {result.scoreOn10.toFixed(1)} <span className="text-2xl sm:text-3xl font-semibold text-stone-400">/ 10</span>
            </div>
            <div className={`mt-2 inline-block px-3 py-1 rounded-full text-xs font-bold border ${rating.color}`}>
              {rating.label} • <span className="font-armenian">{rating.labelArmenian}</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-stone-100 bg-stone-50/50 p-4 sm:p-6 text-center">
          <div className="p-3">
            <div className="flex items-center justify-center gap-1.5 text-xs text-stone-500 mb-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Aciertos</span>
            </div>
            <div className="text-2xl font-bold text-emerald-700">
              {result.correctCount}
            </div>
            <div className="text-[11px] text-stone-400 font-medium">
              {result.percentage.toFixed(0)}% del examen
            </div>
          </div>

          <div className="p-3">
            <div className="flex items-center justify-center gap-1.5 text-xs text-stone-500 mb-1">
              <XCircle className="w-4 h-4 text-rose-600" />
              <span>Errores</span>
            </div>
            <div className="text-2xl font-bold text-rose-700">
              {result.incorrectCount}
            </div>
            <div className="text-[11px] text-stone-400 font-medium">
              Para repasar
            </div>
          </div>

          <div className="p-3">
            <div className="flex items-center justify-center gap-1.5 text-xs text-stone-500 mb-1">
              <HelpCircle className="w-4 h-4 text-stone-400" />
              <span>Sin responder</span>
            </div>
            <div className="text-2xl font-bold text-stone-700">
              {result.totalQuestions - result.answeredCount}
            </div>
            <div className="text-[11px] text-stone-400 font-medium">
              De {result.totalQuestions} totales
            </div>
          </div>

          <div className="p-3">
            <div className="flex items-center justify-center gap-1.5 text-xs text-stone-500 mb-1">
              <Clock className="w-4 h-4 text-amber-600" />
              <span>Tiempo</span>
            </div>
            <div className="text-lg sm:text-xl font-bold text-stone-800">
              {formatTime(result.totalTimeSeconds)}
            </div>
            <div className="text-[11px] text-stone-400 font-medium">
              Duración total
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons Row */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
        <button
          onClick={onReviewAnswers}
          className="px-6 py-3 rounded-2xl bg-red-900 text-white font-bold text-sm shadow-md hover:bg-red-950 transition-all flex items-center gap-2"
        >
          <span>Revisar todas las respuestas y explicaciones</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        {result.incorrectCount > 0 && (
          <button
            onClick={onPracticeMistakes}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold text-sm shadow-md hover:from-orange-700 hover:to-amber-700 transition-all flex items-center gap-2"
          >
            <AlertTriangle className="w-4 h-4" />
            <span>Practicar mis {result.incorrectCount} errores</span>
          </button>
        )}

        <button
          onClick={onRetryExam}
          className="px-5 py-3 rounded-2xl bg-white border border-stone-300 text-stone-700 font-semibold text-sm hover:bg-stone-50 transition-all flex items-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Repetir examen (nuevo orden)</span>
        </button>

        <button
          onClick={onBackToMenu}
          className="px-5 py-3 rounded-2xl bg-stone-100 text-stone-600 font-semibold text-sm hover:bg-stone-200 transition-all flex items-center gap-2"
        >
          <Home className="w-4 h-4" />
          <span>Menú principal</span>
        </button>
      </div>

      {/* Pedagogical Diagnosis: Strengths & Weaknesses */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {/* Dominados */}
        <div className="bg-emerald-50/70 border border-emerald-200 rounded-3xl p-5 shadow-xs">
          <div className="flex items-center gap-2 text-emerald-900 font-bold text-base mb-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>Temas dominados</span>
          </div>
          <p className="text-xs text-emerald-800 font-armenian mb-3">
            Թեմաներ, որոնք լավ յուրացված են:
          </p>
          {strongBlocks.length > 0 ? (
            <ul className="space-y-1.5 text-xs text-emerald-900">
              {strongBlocks.map(b => (
                <li key={b.blockId} className="flex items-center justify-between bg-white/80 p-2 rounded-xl border border-emerald-100">
                  <span className="font-semibold">{b.name}</span>
                  <span className="font-mono font-bold text-emerald-700">{b.percentage.toFixed(0)}%</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xs text-stone-500 italic bg-white/60 p-3 rounded-xl">
              Continúa practicando para alcanzar más del 70% en cada bloque.
            </p>
          )}
        </div>

        {/* A reforzar */}
        <div className="bg-rose-50/70 border border-rose-200 rounded-3xl p-5 shadow-xs">
          <div className="flex items-center gap-2 text-rose-900 font-bold text-base mb-2">
            <AlertTriangle className="w-5 h-5 text-rose-600" />
            <span>Temas que necesitas reforzar</span>
          </div>
          <p className="text-xs text-rose-800 font-armenian mb-3">
            Թեմաներ, որոնք անհրաժեշտ է կրկնել և ամրապնդել:
          </p>
          {weakBlocks.length > 0 ? (
            <ul className="space-y-1.5 text-xs text-rose-900">
              {weakBlocks.map(b => (
                <li key={b.blockId} className="flex items-center justify-between bg-white/80 p-2 rounded-xl border border-rose-100">
                  <span className="font-semibold">{b.name}</span>
                  <span className="font-mono font-bold text-rose-700">{b.percentage.toFixed(0)}%</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xs text-emerald-700 font-semibold bg-white/60 p-3 rounded-xl">
              ¡Excelente trabajo! No tienes ningún tema por debajo del 60%.
            </p>
          )}
        </div>
      </div>

      {/* Detailed Breakdown by Topic */}
      <div className="bg-white rounded-3xl border border-stone-200 shadow-md p-6">
        <h3 className="font-serif-title font-bold text-stone-900 text-lg mb-1">
          Desglose de resultados por tema escolar
        </h3>
        <p className="text-xs text-stone-500 mb-6 font-armenian">
          Արդյունքների բաշխումն ըստ ուսումնական բաժինների
        </p>

        <div className="space-y-4">
          {result.blockStats.map(stat => {
            if (stat.total === 0) return null;
            return (
              <div key={stat.blockId} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <div>
                    <span className="font-bold text-stone-900">{stat.name}</span>
                    <span className="text-stone-400 font-armenian ml-2 text-xs">
                      ({stat.nameArmenian})
                    </span>
                  </div>
                  <div className="font-mono text-xs font-semibold text-stone-700">
                    <span className="text-red-950 font-bold">{stat.correct}</span> / {stat.total}{' '}
                    <span className="text-stone-400">({stat.percentage.toFixed(0)}%)</span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-stone-100 rounded-full h-2.5 overflow-hidden">
                  <div
                    className={`h-2.5 transition-all duration-500 ${
                      stat.percentage >= 70 ? 'bg-emerald-500' :
                      stat.percentage >= 50 ? 'bg-amber-500' : 'bg-rose-500'
                    }`}
                    style={{ width: `${stat.percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
