import { Question, ExamFilter, ExamDifficulty, QuestionOption } from './types';
import { QUESTIONS_BLOQUE_1_3 } from './questions_bloque1_3';
import { QUESTIONS_BLOQUE_4 } from './questions_bloque4';
import { QUESTIONS_BLOQUE_5_7 } from './questions_bloque5_7';
import { QUESTIONS_BLOQUE_8 } from './questions_bloque8';
import { QUESTIONS_BLOQUE_9_10 } from './questions_bloque9_10';

export const ALL_QUESTIONS: Question[] = [
  ...QUESTIONS_BLOQUE_1_3,
  ...QUESTIONS_BLOQUE_4,
  ...QUESTIONS_BLOQUE_5_7,
  ...QUESTIONS_BLOQUE_8,
  ...QUESTIONS_BLOQUE_9_10
];

export const TOTAL_QUESTIONS_COUNT = ALL_QUESTIONS.length; // 200

export function getQuestionById(id: string): Question | undefined {
  return ALL_QUESTIONS.find(q => q.id === id);
}

/**
 * Fisher-Yates array shuffling algorithm
 */
export function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Shuffles the options of a question while preserving option IDs and correctOptionId
 */
export function shuffleQuestionOptions(question: Question): Question {
  const shuffledOptions: QuestionOption[] = shuffleArray(question.options);
  return {
    ...question,
    options: shuffledOptions
  };
}

/**
 * Prepares and randomizes questions according to the chosen mode, filter, and difficulty
 */
export function prepareExamQuestions(
  filter: ExamFilter,
  difficulty: ExamDifficulty,
  mistakeIds: string[] = []
): Question[] {
  let pool: Question[] = [];

  switch (filter) {
    case 'figuras':
      pool = ALL_QUESTIONS.filter(q => q.block === 8);
      break;
    case 'literatura':
      pool = ALL_QUESTIONS.filter(q => q.block === 5 || q.block === 6 || q.block === 7);
      break;
    case 'gramatica':
      pool = ALL_QUESTIONS.filter(q => q.block === 4 || (q.block === 10 && q.category.includes('Morfología')));
      break;
    case 'comprension':
      pool = ALL_QUESTIONS.filter(q => q.block === 9);
      break;
    case 'comunicacion':
      pool = ALL_QUESTIONS.filter(q => q.block === 1 || q.block === 2 || q.block === 3);
      break;
    case 'errores':
      if (mistakeIds.length > 0) {
        pool = ALL_QUESTIONS.filter(q => mistakeIds.includes(q.id));
      } else {
        // Fallback if no mistakes yet: sample of tricky questions
        pool = ALL_QUESTIONS.filter(q => q.difficulty === 'dificil').slice(0, 20);
      }
      break;
    case 'mini_20':
    case 'normal_50':
    case 'large_100':
    case 'all_200':
    default:
      pool = [...ALL_QUESTIONS];
      break;
  }

  // Filter by difficulty if requested and pool has enough
  if (difficulty !== 'todas') {
    const filteredByDiff = pool.filter(q => q.difficulty === difficulty);
    if (filteredByDiff.length >= 10) {
      pool = filteredByDiff;
    }
  }

  // Shuffle the questions themselves
  let selected = shuffleArray(pool);

  // Slice count according to filter
  if (filter === 'mini_20') {
    selected = selected.slice(0, 20);
  } else if (filter === 'normal_50') {
    selected = selected.slice(0, 50);
  } else if (filter === 'large_100') {
    selected = selected.slice(0, 100);
  } else if (filter === 'all_200') {
    selected = selected.slice(0, 200);
  }

  // Shuffle options A-D for each selected question
  return selected.map(q => shuffleQuestionOptions(q));
}

export const BLOCK_METADATA: Record<number, { name: string; nameArmenian: string; color: string }> = {
  1: { name: 'Funciones del lenguaje', nameArmenian: 'Լեզվի գործառույթներ', color: 'bg-rose-100 text-rose-800 border-rose-300' },
  2: { name: 'Modalidades oracionales', nameArmenian: 'Նախադասության եղանակներ', color: 'bg-amber-100 text-amber-800 border-amber-300' },
  3: { name: 'Elementos de la comunicación', nameArmenian: 'Հաղորդակցության տարրեր', color: 'bg-orange-100 text-orange-800 border-orange-300' },
  4: { name: 'Categorías gramaticales', nameArmenian: 'Քերականական խոսքի մասեր', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' },
  5: { name: 'Literatura popular y culta', nameArmenian: 'Ժողովրդական և դասական գրականություն', color: 'bg-blue-100 text-blue-800 border-blue-300' },
  6: { name: 'Romance, leyenda, mito y cuento', nameArmenian: 'Ռոմանս, լեգենդ, առասպել և հեքիաթ', color: 'bg-purple-100 text-purple-800 border-purple-300' },
  7: { name: 'Lenguaje literario, prosa y verso', nameArmenian: 'Գեղարվեստական լեզու, արձակ և չափածո', color: 'bg-indigo-100 text-indigo-800 border-indigo-300' },
  8: { name: 'Figuras literarias', nameArmenian: 'Գեղարվեստական պատկերավորման միջոցներ', color: 'bg-red-100 text-red-900 border-red-300' },
  9: { name: 'Comprensión de textos', nameArmenian: 'Տեքստերի ընթերցում և ըմբռնում', color: 'bg-teal-100 text-teal-800 border-teal-300' },
  10: { name: 'Análisis de oraciones y repaso', nameArmenian: 'Նախադասությունների վերլուծություն և կրկնություն', color: 'bg-yellow-100 text-yellow-900 border-yellow-300' }
};
