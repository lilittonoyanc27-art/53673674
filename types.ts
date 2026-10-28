export type Difficulty = 'facil' | 'medio' | 'dificil';

export type BlockId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface QuestionOption {
  id: string;
  text: string;
  textArmenian: string;
}

export interface Question {
  id: string;
  block: BlockId;
  blockName: string;
  category: string;
  subtopic: string;
  difficulty: Difficulty;
  question: string;
  questionArmenian: string;
  options: QuestionOption[];
  correctOptionId: string;
  explanation: string;
  explanationArmenian: string;
  textSnippet?: string;
  textSnippetArmenian?: string;
  readingTextId?: string;
}

export interface ReadingSentence {
  es: string;
  hy: string;
}

export interface ReadingPassage {
  id: string;
  title: string;
  titleArmenian: string;
  genre: string;
  genreArmenian: string;
  author: string;
  description: string;
  descriptionArmenian: string;
  sentences: ReadingSentence[];
}

export type ExamMode = 'practice' | 'exam';

export type ExamFilter =
  | 'mini_20'
  | 'normal_50'
  | 'large_100'
  | 'all_200'
  | 'figuras'
  | 'literatura'
  | 'gramatica'
  | 'comprension'
  | 'comunicacion'
  | 'errores';

export type ExamDifficulty = 'todas' | 'facil' | 'medio' | 'dificil';

export interface UserAnswerRecord {
  questionId: string;
  selectedOptionId: string | null;
  isCorrect: boolean;
  timeSpentSeconds: number;
  flaggedForReview?: boolean;
}

export interface BlockScoreStat {
  blockId: number;
  name: string;
  nameArmenian: string;
  total: number;
  correct: number;
  percentage: number;
}

export interface ExamResult {
  id: string;
  date: string;
  mode: ExamMode;
  filter: ExamFilter;
  filterLabel: string;
  difficulty: ExamDifficulty;
  totalQuestions: number;
  answeredCount: number;
  correctCount: number;
  incorrectCount: number;
  scoreOn10: number;
  percentage: number;
  totalTimeSeconds: number;
  blockStats: BlockScoreStat[];
  answers: Record<string, { selectedOptionId: string | null; isCorrect: boolean }>;
}

export interface SavedMistake {
  questionId: string;
  failedTimes: number;
  lastFailedDate: string;
  lastSelectedOptionId?: string;
}

export interface InProgressExamState {
  mode: ExamMode;
  filter: ExamFilter;
  difficulty: ExamDifficulty;
  questionIds: string[];
  currentIndex: number;
  answers: Record<string, string>; // questionId -> selectedOptionId
  flags: Record<string, boolean>; // questionId -> boolean
  startTime: number;
  elapsedSeconds: number;
}
