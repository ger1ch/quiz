export interface Option {
  letter: string;
  text: string;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
  correctAnswer: string;
  icon: string;
}

export interface QuizResult {
  correct: number;
  total: number;
  wrong: number;
  timeSeconds: number;
  grade: 'gold' | 'silver' | 'bronze';
}