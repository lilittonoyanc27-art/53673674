import { ExamResult, SavedMistake, InProgressExamState } from './types';

const STORAGE_KEYS = {
  RESULTS: 'lengua_eso_results_v1',
  MISTAKES: 'lengua_eso_mistakes_v1',
  IN_PROGRESS: 'lengua_eso_in_progress_v1',
  TRANSLATIONS_PREF: 'lengua_eso_pref_translations_v1'
};

export function getSavedResults(): ExamResult[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.RESULTS);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error('Failed to load results from localStorage', err);
    return [];
  }
}

export function saveExamResult(result: ExamResult): void {
  try {
    const results = getSavedResults();
    results.unshift(result);
    // Keep max 50 results
    localStorage.setItem(STORAGE_KEYS.RESULTS, JSON.stringify(results.slice(0, 50)));
  } catch (err) {
    console.error('Failed to save result', err);
  }
}

export function getSavedMistakes(): SavedMistake[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.MISTAKES);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error('Failed to load mistakes from localStorage', err);
    return [];
  }
}

export function recordMistake(questionId: string, selectedOptionId?: string): void {
  try {
    const mistakes = getSavedMistakes();
    const existingIndex = mistakes.findIndex(m => m.questionId === questionId);
    if (existingIndex >= 0) {
      mistakes[existingIndex].failedTimes += 1;
      mistakes[existingIndex].lastFailedDate = new Date().toISOString();
      mistakes[existingIndex].lastSelectedOptionId = selectedOptionId;
    } else {
      mistakes.unshift({
        questionId,
        failedTimes: 1,
        lastFailedDate: new Date().toISOString(),
        lastSelectedOptionId: selectedOptionId
      });
    }
    localStorage.setItem(STORAGE_KEYS.MISTAKES, JSON.stringify(mistakes));
  } catch (err) {
    console.error('Failed to record mistake', err);
  }
}

export function removeMistake(questionId: string): void {
  try {
    const mistakes = getSavedMistakes().filter(m => m.questionId !== questionId);
    localStorage.setItem(STORAGE_KEYS.MISTAKES, JSON.stringify(mistakes));
  } catch (err) {
    console.error('Failed to remove mistake', err);
  }
}

export function clearAllMistakes(): void {
  localStorage.removeItem(STORAGE_KEYS.MISTAKES);
}

export function saveInProgressExam(state: InProgressExamState | null): void {
  try {
    if (state === null) {
      localStorage.removeItem(STORAGE_KEYS.IN_PROGRESS);
    } else {
      localStorage.setItem(STORAGE_KEYS.IN_PROGRESS, JSON.stringify(state));
    }
  } catch (err) {
    console.error('Failed to persist in-progress exam', err);
  }
}

export function getInProgressExam(): InProgressExamState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.IN_PROGRESS);
    return raw ? JSON.parse(raw) : null;
  } catch (err) {
    console.error('Failed to get in-progress exam', err);
    return null;
  }
}

export function getGlobalTranslationPref(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEYS.TRANSLATIONS_PREF) === 'true';
  } catch {
    return false;
  }
}

export function setGlobalTranslationPref(enabled: boolean): void {
  try {
    localStorage.setItem(STORAGE_KEYS.TRANSLATIONS_PREF, enabled ? 'true' : 'false');
  } catch {
    // ignore
  }
}
