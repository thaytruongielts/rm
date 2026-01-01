
export interface Question {
  id: number;
  prompt: string;
  keyword: string;
  hint: string;
  correctAnswers: string[];
  explanation: string;
}

export interface UserAnswer {
  questionId: number;
  answer: string;
  isCorrect: boolean | null;
}

export enum AppState {
  START = 'START',
  QUIZ = 'QUIZ',
  RESULTS = 'RESULTS'
}
