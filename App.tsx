import { useState, useEffect } from 'react';
import {
  ExamMode,
  ExamFilter,
  ExamDifficulty,
  Question,
  ExamResult,
  BlockScoreStat,
  SavedMistake
} from './types';
import {
  prepareExamQuestions,
  TOTAL_QUESTIONS_COUNT,
  BLOCK_METADATA,
  getQuestionById
} from './all_questions';
import { READING_PASSAGES } from './reading_texts';
import {
  getSavedResults,
  saveExamResult,
  getSavedMistakes,
  recordMistake,
  removeMistake,
  saveInProgressExam,
  getInProgressExam,
  getGlobalTranslationPref,
  setGlobalTranslationPref
} from './storage';
import { ExamHeader } from './ExamHeader';
import { QuestionCard } from './QuestionCard';
import { ReadingCard } from './ReadingCard';
import { QuestionPalette } from './QuestionPalette';
import { ResultsView } from './ResultsView';
import { ReviewView } from './ReviewView';
import { MistakesView } from './MistakesView';
import { TheoryGuideView } from './TheoryGuideView';
import {
  BookOpen,
  Sparkles,
  Award,
  AlertTriangle,
  Play,
  RotateCcw,
  Languages,
  CheckCircle2,
  ScrollText,
  Bookmark,
  Compass,
  FileQuestion
} from 'lucide-react';

type Screen = 'home' | 'exam' | 'results' | 'review' | 'mistakes' | 'theory';

export default function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const [examMode, setExamMode] = useState<ExamMode>('practice');
  const [examDifficulty, setExamDifficulty] = useState<ExamDifficulty>('todas');
  const [activeFilter, setActiveFilter] = useState<ExamFilter>('normal_50');

  // Exam state
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>({});
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);
  const [showAllTranslations, setShowAllTranslations] = useState<boolean>(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState<boolean>(false);

  // Results & History
  const [currentResult, setCurrentResult] = useState<ExamResult | null>(null);
  const [savedResults, setSavedResults] = useState<ExamResult[]>([]);
  const [savedMistakes, setSavedMistakes] = useState<SavedMistake[]>([]);
  const [hasResumeAttempt, setHasResumeAttempt] = useState<boolean>(false);

  // Initial load
  useEffect(() => {
    setSavedResults(getSavedResults());
    setSavedMistakes(getSavedMistakes());
    setShowAllTranslations(getGlobalTranslationPref());

    const inProgress = getInProgressExam();
    if (inProgress && inProgress.questionIds.length > 0) {
      setHasResumeAttempt(true);
    }
  }, []);

  // Timer effect
  useEffect(() => {
    let interval: any = null;
    if (isTimerActive && screen === 'exam') {
      interval = setInterval(() => {
        setElapsedSeconds(prev => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTimerActive, screen]);

  // Persist in-progress exam on change
  useEffect(() => {
    if (screen === 'exam' && currentQuestions.length > 0) {
      saveInProgressExam({
        mode: examMode,
        filter: activeFilter,
        difficulty: examDifficulty,
        questionIds: currentQuestions.map(q => q.id),
        currentIndex,
        answers: userAnswers,
        flags: flaggedQuestions,
        startTime: Date.now() - elapsedSeconds * 1000,
        elapsedSeconds
      });
    }
  }, [screen, currentQuestions, currentIndex, userAnswers, flaggedQuestions, elapsedSeconds, examMode, activeFilter, examDifficulty]);

  const handleToggleGlobalTranslations = () => {
    const nextVal = !showAllTranslations;
    setShowAllTranslations(nextVal);
    setGlobalTranslationPref(nextVal);
  };

  // Start a new exam
  const startExam = (filter: ExamFilter, modeOverride?: ExamMode) => {
    const mode = modeOverride || examMode;
    const questions = prepareExamQuestions(
      filter,
      examDifficulty,
      savedMistakes.map(m => m.questionId)
    );

    if (questions.length === 0) {
      alert('No se encontraron preguntas para este filtro.');
      return;
    }

    setActiveFilter(filter);
    setExamMode(mode);
    setCurrentQuestions(questions);
    setCurrentIndex(0);
    setUserAnswers({});
    setFlaggedQuestions({});
    setElapsedSeconds(0);
    setIsTimerActive(true);
    setScreen('exam');
    setHasResumeAttempt(false);
  };

  // Resume unfinished session
  const resumeExam = () => {
    const saved = getInProgressExam();
    if (!saved) return;

    const questions: Question[] = [];
    saved.questionIds.forEach(id => {
      const q = getQuestionById(id);
      if (q) questions.push(q);
    });

    if (questions.length === 0) {
      setHasResumeAttempt(false);
      return;
    }

    setExamMode(saved.mode);
    setActiveFilter(saved.filter);
    setExamDifficulty(saved.difficulty);
    setCurrentQuestions(questions);
    setCurrentIndex(saved.currentIndex || 0);
    setUserAnswers(saved.answers || {});
    setFlaggedQuestions(saved.flags || {});
    setElapsedSeconds(saved.elapsedSeconds || 0);
    setIsTimerActive(true);
    setScreen('exam');
  };

  // Select Option
  const handleSelectOption = (optionId: string) => {
    const currentQ = currentQuestions[currentIndex];
    if (!currentQ) return;

    // In practice mode, if already answered, don't change
    if (examMode === 'practice' && userAnswers[currentQ.id]) {
      return;
    }

    setUserAnswers(prev => ({
      ...prev,
      [currentQ.id]: optionId
    }));

    // In practice mode, if wrong, immediately register mistake
    if (examMode === 'practice') {
      const isCorrect = optionId === currentQ.correctOptionId;
      if (!isCorrect) {
        recordMistake(currentQ.id, optionId);
        setSavedMistakes(getSavedMistakes());
      } else {
        removeMistake(currentQ.id);
        setSavedMistakes(getSavedMistakes());
      }
    }
  };

  const handleToggleFlag = () => {
    const currentQ = currentQuestions[currentIndex];
    if (!currentQ) return;
    setFlaggedQuestions(prev => ({
      ...prev,
      [currentQ.id]: !prev[currentQ.id]
    }));
  };

  // Calculate & Finish
  const finishExam = () => {
    setIsTimerActive(false);

    const totalQuestions = currentQuestions.length;
    let correctCount = 0;
    let incorrectCount = 0;
    const answersRecord: Record<string, { selectedOptionId: string | null; isCorrect: boolean }> = {};
    const blockStatsMap: Record<number, { total: number; correct: number; name: string }> = {};

    currentQuestions.forEach(q => {
      const selected = userAnswers[q.id] || null;
      const isCorrect = selected === q.correctOptionId;

      if (!blockStatsMap[q.block]) {
        blockStatsMap[q.block] = {
          total: 0,
          correct: 0,
          name: q.blockName
        };
      }
      blockStatsMap[q.block].total += 1;

      if (selected !== null) {
        if (isCorrect) {
          correctCount += 1;
          blockStatsMap[q.block].correct += 1;
          removeMistake(q.id);
        } else {
          incorrectCount += 1;
          recordMistake(q.id, selected);
        }
      } else {
        // Unanswered: also record as needing review
        incorrectCount += 1;
        recordMistake(q.id);
      }

      answersRecord[q.id] = {
        selectedOptionId: selected,
        isCorrect
      };
    });

    const percentage = totalQuestions > 0 ? (correctCount / totalQuestions) * 100 : 0;
    const scoreOn10 = Math.round((correctCount / totalQuestions) * 100) / 10;

    const blockStats: BlockScoreStat[] = Object.entries(blockStatsMap).map(([bId, stat]) => {
      const blockNum = Number(bId);
      const meta = BLOCK_METADATA[blockNum];
      return {
        blockId: blockNum,
        name: stat.name,
        nameArmenian: meta ? meta.nameArmenian : '',
        total: stat.total,
        correct: stat.correct,
        percentage: stat.total > 0 ? (stat.correct / stat.total) * 100 : 0
      };
    });

    const getFilterLabel = (f: ExamFilter) => {
      switch (f) {
        case 'mini_20': return 'Mini examen (20)';
        case 'normal_50': return 'Examen normal (50)';
        case 'large_100': return 'Examen largo (100)';
        case 'all_200': return 'Examen completo (200)';
        case 'figuras': return 'Figuras literarias';
        case 'literatura': return 'Literatura popular y culta';
        case 'gramatica': return 'Categorías gramaticales';
        case 'comprension': return 'Comprensión de textos';
        case 'comunicacion': return 'Funciones y comunicación';
        case 'errores': return 'Práctica de mis errores';
        default: return 'Examen';
      }
    };

    const newResult: ExamResult = {
      id: `exam_${Date.now()}`,
      date: new Date().toLocaleDateString('es-ES', {
        day: '2-digit',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit'
      }),
      mode: examMode,
      filter: activeFilter,
      filterLabel: getFilterLabel(activeFilter),
      difficulty: examDifficulty,
      totalQuestions,
      answeredCount: Object.keys(userAnswers).length,
      correctCount,
      incorrectCount,
      scoreOn10,
      percentage,
      totalTimeSeconds: elapsedSeconds,
      blockStats,
      answers: answersRecord
    };

    saveExamResult(newResult);
    setSavedResults(getSavedResults());
    setSavedMistakes(getSavedMistakes());
    saveInProgressExam(null);
    setHasResumeAttempt(false);
    setCurrentResult(newResult);
    setScreen('results');
  };

  const confirmFinishExam = () => {
    const answeredCount = Object.keys(userAnswers).length;
    const unanswered = currentQuestions.length - answeredCount;

    if (unanswered > 0) {
      const confirmed = window.confirm(
        `Tienes ${unanswered} pregunta(s) sin responder de ${currentQuestions.length}.\n¿Estás seguro de que deseas entregar el examen ahora?`
      );
      if (!confirmed) return;
    }
    finishExam();
  };

  const handleQuitExam = () => {
    const confirmed = window.confirm(
      '¿Deseas salir del examen? Tu progreso actual quedará guardado para que puedas reanudarlo cuando quieras.'
    );
    if (confirmed) {
      setIsTimerActive(false);
      setHasResumeAttempt(true);
      setScreen('home');
    }
  };

  // Find reading passage if current question is from Bloque 9
  const currentQ = currentQuestions[currentIndex];
  const currentPassage = currentQ?.readingTextId
    ? READING_PASSAGES.find(p => p.id === currentQ.readingTextId)
    : undefined;

  // -------------------------------------------------------------
  // RENDER SCREENS
  // -------------------------------------------------------------
  if (screen === 'exam' && currentQ) {
    return (
      <div className="min-h-screen bg-[#faf7f2] flex flex-col">
        <ExamHeader
          mode={examMode}
          filter={activeFilter}
          currentIndex={currentIndex}
          totalQuestions={currentQuestions.length}
          answeredCount={Object.keys(userAnswers).length}
          elapsedSeconds={elapsedSeconds}
          showAllTranslations={showAllTranslations}
          onToggleTranslations={handleToggleGlobalTranslations}
          onFinishExam={confirmFinishExam}
          onQuitExam={handleQuitExam}
          onTogglePalette={() => setIsPaletteOpen(true)}
          isPaletteOpen={isPaletteOpen}
        />

        <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-6">
          {currentPassage && (
            <ReadingCard
              passage={currentPassage}
              showAllTranslations={showAllTranslations}
            />
          )}

          <QuestionCard
            question={currentQ}
            mode={examMode}
            selectedOptionId={userAnswers[currentQ.id] || null}
            onSelectOption={handleSelectOption}
            isFlagged={!!flaggedQuestions[currentQ.id]}
            onToggleFlag={handleToggleFlag}
            showAllTranslations={showAllTranslations}
            onNext={() => setCurrentIndex(prev => Math.min(prev + 1, currentQuestions.length - 1))}
            onPrevious={() => setCurrentIndex(prev => Math.max(prev - 1, 0))}
            isFirst={currentIndex === 0}
            isLast={currentIndex === currentQuestions.length - 1}
            onFinishExam={confirmFinishExam}
          />
        </main>

        {isPaletteOpen && (
          <QuestionPalette
            totalQuestions={currentQuestions.length}
            currentIndex={currentIndex}
            answers={userAnswers}
            flags={flaggedQuestions}
            questionIds={currentQuestions.map(q => q.id)}
            onSelectIndex={(idx) => setCurrentIndex(idx)}
            onClose={() => setIsPaletteOpen(false)}
          />
        )}
      </div>
    );
  }

  if (screen === 'results' && currentResult) {
    return (
      <div className="min-h-screen bg-[#faf7f2] py-4">
        <ResultsView
          result={currentResult}
          onReviewAnswers={() => setScreen('review')}
          onPracticeMistakes={() => startExam('errores', 'practice')}
          onRetryExam={() => startExam(currentResult.filter, currentResult.mode)}
          onBackToMenu={() => setScreen('home')}
        />
      </div>
    );
  }

  if (screen === 'review' && currentResult) {
    return (
      <div className="min-h-screen bg-[#faf7f2] py-4">
        <ReviewView
          result={currentResult}
          onBackToResults={() => setScreen('results')}
        />
      </div>
    );
  }

  if (screen === 'mistakes') {
    return (
      <div className="min-h-screen bg-[#faf7f2] py-4">
        <MistakesView
          mistakes={savedMistakes}
          onStartMistakesExam={() => startExam('errores', 'practice')}
          onBackToMenu={() => setScreen('home')}
          onRefreshMistakes={() => setSavedMistakes(getSavedMistakes())}
        />
      </div>
    );
  }

  if (screen === 'theory') {
    return (
      <div className="min-h-screen bg-[#faf7f2] py-4">
        <TheoryGuideView onBackToMenu={() => setScreen('home')} />
      </div>
    );
  }

  // -------------------------------------------------------------
  // HOME / MAIN DASHBOARD SCREEN
  // -------------------------------------------------------------
  return (
    <div className="min-h-screen bg-[#faf7f2] text-stone-900 flex flex-col">
      {/* Top Banner / Hero */}
      <header className="bg-gradient-to-b from-[#4a0e17] via-[#7f1d1d] to-[#991b1b] text-white pt-10 pb-16 px-4 shadow-lg border-b-4 border-amber-400 relative overflow-hidden">
        {/* Decorative backdrop patterns */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-200 border border-amber-400/40 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Entrenador Escolar Oficial — 7.º Grado / 1.º ESO</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif-title tracking-tight mb-2">
            LENGUA CASTELLANA Y LITERATURA
          </h1>
          <h2 className="text-lg sm:text-2xl font-bold text-amber-300 font-serif-title tracking-wide mb-2">
            GRAN EXAMEN INTERACTIVO — 1.º ESO
          </h2>
          <p className="text-xs sm:text-sm text-stone-200 font-armenian max-w-2xl mx-auto leading-relaxed">
            Իսպաներեն լեզվի և գրականության ամբողջական դպրոցական քննություն՝ 200 եզակի հարցերով և հայերեն թարգմանությամբ
          </p>

          {/* Resume In-Progress Exam Banner */}
          {hasResumeAttempt && (
            <div className="mt-6 max-w-md mx-auto p-3.5 rounded-2xl bg-amber-400 text-stone-950 font-semibold shadow-lg flex items-center justify-between gap-3 text-xs sm:text-sm animate-pulse">
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4" />
                <span>Tienes un examen sin terminar</span>
              </div>
              <button
                onClick={resumeExam}
                className="px-3.5 py-1.5 bg-red-950 text-white rounded-xl font-bold hover:bg-black transition-colors"
              >
                Reanudar
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 -mt-8 flex-1 pb-16 w-full space-y-8 z-20">
        {/* Controls Card: Mode, Difficulty & Quick Stats */}
        <div className="bg-white rounded-3xl border border-stone-200 shadow-xl p-5 sm:p-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Mode Selector */}
            <div>
              <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
                Modo de estudio
              </label>
              <div className="grid grid-cols-2 gap-2 p-1.5 bg-stone-100 rounded-2xl border border-stone-200">
                <button
                  type="button"
                  onClick={() => setExamMode('practice')}
                  className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex flex-col items-center gap-0.5 ${
                    examMode === 'practice'
                      ? 'bg-white text-red-950 shadow-sm border border-stone-200/80 ring-1 ring-red-900/10'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  <span>Modo Práctica</span>
                  <span className="text-[10px] font-normal text-stone-500 font-armenian">
                    Անհապաղ բացատրություն
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setExamMode('exam')}
                  className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex flex-col items-center gap-0.5 ${
                    examMode === 'exam'
                      ? 'bg-red-900 text-white shadow-sm ring-1 ring-red-950'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  <span>Examen Real</span>
                  <span className={`text-[10px] font-normal font-armenian ${examMode === 'exam' ? 'text-red-200' : 'text-stone-500'}`}>
                    Ժամանակով և գնահատականով
                  </span>
                </button>
              </div>
            </div>

            {/* Difficulty Selector */}
            <div>
              <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
                Nivel de dificultad
              </label>
              <div className="grid grid-cols-4 gap-1.5 p-1 bg-stone-100 rounded-2xl border border-stone-200 text-xs">
                {(['todas', 'facil', 'medio', 'dificil'] as ExamDifficulty[]).map(diff => (
                  <button
                    key={diff}
                    type="button"
                    onClick={() => setExamDifficulty(diff)}
                    className={`py-2 rounded-xl font-bold transition-all ${
                      examDifficulty === diff
                        ? 'bg-amber-400 text-stone-950 shadow-xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    {diff === 'todas' ? 'Mixto' : diff === 'facil' ? 'Fácil' : diff === 'medio' ? 'Medio' : 'Difícil'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CROWN FEATURE: EXAMEN COMPLETO 200 PREGUNTAS */}
        <div className="relative rounded-3xl bg-gradient-to-r from-red-950 via-red-900 to-rose-900 text-white p-6 sm:p-8 shadow-xl border-2 border-amber-400 overflow-hidden group">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-400/20 to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-stone-950 text-xs font-black uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                <span>Banco Maestro de Preguntas</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-serif-title tracking-tight">
                EL GRAN EXAMEN DE 200 PREGUNTAS
              </h3>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
                Abarca todos los temas del cuaderno: Funciones (15), Modalidades (15), Comunicación (10), Categorías gramaticales (25), Literatura popular y culta (25), Romance, leyenda, mito y cuento (20), Prosa y verso (15), Figuras literarias (45), Comprensión (15) y Repaso (15).
              </p>
              <p className="text-xs text-amber-300 font-armenian">
                200 իսպաներեն հարցերի լիարժեք քննություն՝ հայերեն բացատրություններով:
              </p>
            </div>

            <button
              onClick={() => startExam('all_200')}
              className="px-8 py-4 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 hover:from-amber-300 hover:to-orange-400 text-stone-950 font-black text-sm sm:text-base rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3 shrink-0"
            >
              <Play className="w-5 h-5 fill-current" />
              <span>Empezar 200 Preguntas</span>
            </button>
          </div>
        </div>

        {/* SECTION 1: MODOS POR TAMAÑO DE EXAMEN */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-serif-title font-bold text-lg text-stone-900 flex items-center gap-2">
              <ScrollText className="w-5 h-5 text-red-900" />
              <span>Exámenes por duración</span>
            </h3>
            <span className="text-xs text-stone-500">Preguntas mezcladas</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* 20 Questions */}
            <div
              onClick={() => startExam('mini_20')}
              className="bg-white rounded-3xl border border-stone-200 p-5 shadow-xs hover:border-red-800 hover:shadow-md cursor-pointer transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-800 font-bold flex items-center justify-center text-sm border border-amber-200 group-hover:bg-red-900 group-hover:text-white transition-colors">
                  20
                </span>
                <span className="text-xs font-semibold text-stone-400">~15 min</span>
              </div>
              <h4 className="font-bold text-stone-900 text-base mb-1">
                Mini Examen
              </h4>
              <p className="text-xs text-stone-500 leading-relaxed mb-2">
                20 preguntas equilibradas de todos los bloques para un repaso exprés.
              </p>
              <span className="text-xs font-bold text-red-900 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                Comenzar →
              </span>
            </div>

            {/* 50 Questions */}
            <div
              onClick={() => startExam('normal_50')}
              className="bg-white rounded-3xl border border-stone-200 p-5 shadow-xs hover:border-red-800 hover:shadow-md cursor-pointer transition-all group relative overflow-hidden"
            >
              <span className="absolute top-3 right-3 text-[10px] font-extrabold uppercase px-2 py-0.5 bg-amber-100 text-amber-900 rounded-full border border-amber-300">
                Recomendado
              </span>
              <div className="flex items-center justify-between mb-3">
                <span className="w-10 h-10 rounded-2xl bg-orange-50 text-orange-800 font-bold flex items-center justify-center text-sm border border-orange-200 group-hover:bg-red-900 group-hover:text-white transition-colors">
                  50
                </span>
                <span className="text-xs font-semibold text-stone-400">~35 min</span>
              </div>
              <h4 className="font-bold text-stone-900 text-base mb-1">
                Examen Normal
              </h4>
              <p className="text-xs text-stone-500 leading-relaxed mb-2">
                Formato estándar de evaluación trimestral de 1.º ESO.
              </p>
              <span className="text-xs font-bold text-red-900 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                Comenzar →
              </span>
            </div>

            {/* 100 Questions */}
            <div
              onClick={() => startExam('large_100')}
              className="bg-white rounded-3xl border border-stone-200 p-5 shadow-xs hover:border-red-800 hover:shadow-md cursor-pointer transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-800 font-bold flex items-center justify-center text-sm border border-rose-200 group-hover:bg-red-900 group-hover:text-white transition-colors">
                  100
                </span>
                <span className="text-xs font-semibold text-stone-400">~60 min</span>
              </div>
              <h4 className="font-bold text-stone-900 text-base mb-1">
                Examen Largo
              </h4>
              <p className="text-xs text-stone-500 leading-relaxed mb-2">
                100 preguntas para una preparación exhaustiva y a fondo.
              </p>
              <span className="text-xs font-bold text-red-900 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                Comenzar →
              </span>
            </div>
          </div>
        </div>

        {/* SECTION 2: EXÁMENES ESPECÍFICOS POR BLOQUES */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-serif-title font-bold text-lg text-stone-900 flex items-center gap-2">
              <Compass className="w-5 h-5 text-red-900" />
              <span>Practicar por bloques del cuaderno</span>
            </h3>
            <span className="text-xs text-stone-500">Especializados</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {/* Figuras literarias (45) */}
            <div
              onClick={() => startExam('figuras')}
              className="bg-white rounded-2xl border border-stone-200 p-4 hover:border-red-800 hover:shadow-md cursor-pointer transition-all group"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-red-100 text-red-900 border border-red-300">
                  Bloque 8 • 45 preguntas
                </span>
                <Sparkles className="w-4 h-4 text-amber-500" />
              </div>
              <h4 className="font-bold text-stone-900 text-sm mb-1 group-hover:text-red-900 transition-colors">
                Figuras literarias
              </h4>
              <p className="text-xs text-stone-500 mb-2 font-armenian">
                Ալիտերացիա, օնոմատոպեյա, հիպերբատոն, անաֆորա, փոխաբերություն:
              </p>
              <div className="text-[11px] text-stone-400">
                Aliteración, Hipérbaton, Anáfora, Metáfora (A es B, B de A, pura)...
              </div>
            </div>

            {/* Literatura (60) */}
            <div
              onClick={() => startExam('literatura')}
              className="bg-white rounded-2xl border border-stone-200 p-4 hover:border-red-800 hover:shadow-md cursor-pointer transition-all group"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-900 border border-blue-300">
                  Bloques 5, 6, 7 • 60 preguntas
                </span>
                <BookOpen className="w-4 h-4 text-blue-500" />
              </div>
              <h4 className="font-bold text-stone-900 text-sm mb-1 group-hover:text-red-900 transition-colors">
                Literatura popular y culta
              </h4>
              <p className="text-xs text-stone-500 mb-2 font-armenian">
                Ժողովրդական և դասական գրականություն, ռոմանս, լեգենդ, միֆ:
              </p>
              <div className="text-[11px] text-stone-400">
                Romances octosílabos, leyendas de Bécquer, mitos, verso y prosa...
              </div>
            </div>

            {/* Gramática (35) */}
            <div
              onClick={() => startExam('gramatica')}
              className="bg-white rounded-2xl border border-stone-200 p-4 hover:border-red-800 hover:shadow-md cursor-pointer transition-all group"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300">
                  Bloque 4 • 25 preguntas
                </span>
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              </div>
              <h4 className="font-bold text-stone-900 text-sm mb-1 group-hover:text-red-900 transition-colors">
                Categorías gramaticales
              </h4>
              <p className="text-xs text-stone-500 mb-2 font-armenian">
                Գոյական, ածական, բայ, մակբայ, նախդիր, դերանուն:
              </p>
              <div className="text-[11px] text-stone-400">
                Sustantivo, determinante vs pronombre, adjetivo, sujeto y predicado...
              </div>
            </div>

            {/* Comprensión lectora (15 sobre 8 textos) */}
            <div
              onClick={() => startExam('comprension')}
              className="bg-white rounded-2xl border border-stone-200 p-4 hover:border-red-800 hover:shadow-md cursor-pointer transition-all group"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-teal-100 text-teal-900 border border-teal-300">
                  Bloque 9 • 8 Textos completos
                </span>
                <ScrollText className="w-4 h-4 text-teal-500" />
              </div>
              <h4 className="font-bold text-stone-900 text-sm mb-1 group-hover:text-red-900 transition-colors">
                Comprensión lectora
              </h4>
              <p className="text-xs text-stone-500 mb-2 font-armenian">
                8 բնօրինակ տեքստեր՝ նախադասություն առ նախադասություն թարգմանությամբ:
              </p>
              <div className="text-[11px] text-stone-400">
                Cuento, Leyenda, Mito de Ícaro, Poema lírico, Romance, Prosa...
              </div>
            </div>

            {/* Funciones y Comunicación (40) */}
            <div
              onClick={() => startExam('comunicacion')}
              className="bg-white rounded-2xl border border-stone-200 p-4 hover:border-red-800 hover:shadow-md cursor-pointer transition-all group"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-orange-100 text-orange-900 border border-orange-300">
                  Bloques 1, 2, 3 • 40 preguntas
                </span>
                <Languages className="w-4 h-4 text-orange-500" />
              </div>
              <h4 className="font-bold text-stone-900 text-sm mb-1 group-hover:text-red-900 transition-colors">
                Funciones y comunicación
              </h4>
              <p className="text-xs text-stone-500 mb-2 font-armenian">
                Լեզվի 6 գործառույթներ, նախադասության եղանակներ, հաղորդակցություն:
              </p>
              <div className="text-[11px] text-stone-400">
                Referencial, expresiva, apelativa, fática, metalingüística, desiderativa...
              </div>
            </div>

            {/* Repasar mis errores */}
            <div
              onClick={() => setScreen('mistakes')}
              className={`rounded-2xl border p-4 cursor-pointer transition-all group ${
                savedMistakes.length > 0
                  ? 'bg-amber-50/80 border-amber-300 hover:border-amber-400 hover:shadow-md'
                  : 'bg-white border-stone-200 hover:border-stone-300'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-200 text-amber-950 border border-amber-300">
                  {savedMistakes.length} error{savedMistakes.length !== 1 ? 'es' : ''} guardados
                </span>
                <AlertTriangle className="w-4 h-4 text-amber-600" />
              </div>
              <h4 className="font-bold text-stone-900 text-sm mb-1 group-hover:text-amber-900 transition-colors">
                Mis errores
              </h4>
              <p className="text-xs text-stone-500 mb-2 font-armenian">
                Իմ սխալները՝ կրկնելու և քննության նախապատրաստվելու համար:
              </p>
              <div className="text-[11px] text-amber-800 font-semibold">
                Abrir entrenador de fallos →
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: HERRAMIENTAS ADICIONALES (TEORÍA + HISTORIAL) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Guía Teórica */}
          <div
            onClick={() => setScreen('theory')}
            className="bg-white rounded-3xl border border-stone-200 p-5 shadow-xs hover:border-red-900 hover:shadow-md cursor-pointer transition-all flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-900 flex items-center justify-center shrink-0 border border-red-200">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-sm sm:text-base">
                  Guía Teórica del Cuaderno
                </h4>
                <p className="text-xs text-stone-500 font-armenian">
                  Տետրի բոլոր կանոնները, սահմանումներն ու օրինակները հայերենով
                </p>
              </div>
            </div>
            <span className="text-xs font-bold text-red-900 shrink-0">
              Ver apuntes →
            </span>
          </div>

          {/* Historial de Notas */}
          <div className="bg-white rounded-3xl border border-stone-200 p-5 shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-600" />
                <span>Últimas notas obtenidas</span>
              </h4>
              <span className="text-xs text-stone-400">
                {savedResults.length} examen{savedResults.length !== 1 ? 'es' : ''}
              </span>
            </div>

            {savedResults.length > 0 ? (
              <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
                {savedResults.slice(0, 3).map(res => (
                  <div
                    key={res.id}
                    onClick={() => {
                      setCurrentResult(res);
                      setScreen('results');
                    }}
                    className="p-2 rounded-xl bg-stone-50 hover:bg-stone-100 cursor-pointer flex items-center justify-between text-xs transition-colors border border-stone-100"
                  >
                    <div>
                      <span className="font-semibold text-stone-900">{res.filterLabel}</span>
                      <span className="text-stone-400 text-[10px] ml-2">{res.date}</span>
                    </div>
                    <div className="font-bold text-sm font-mono text-red-950">
                      {res.scoreOn10.toFixed(1)} / 10
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-stone-400 italic">
                Aún no has completado ningún examen. ¡Tus notas aparecerán aquí!
              </p>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-stone-200 bg-white py-6 px-4 text-center text-xs text-stone-500">
        <p className="font-serif-title font-bold text-stone-700 mb-1">
          Lengua Castellana y Literatura — 1.º ESO (Educación Secundaria Obligatoria)
        </p>
        <p className="font-armenian text-stone-400">
          Կառուցված է իսպանական դպրոցի ծրագրով՝ հայալեզու աշակերտի հաջողության համար:
        </p>
      </footer>
    </div>
  );
}
