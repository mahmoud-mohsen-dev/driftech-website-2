export type questionType = {
  id: number;
  question: string;
  options: {
    label: string;
    value: string;
  }[];
};

export type QuizDataStoredType = questionType[] | null;

export type CurrentQuestionType = {
  data: questionType | null;
  index: number | null;
};

export type StoredAnswerType = {
  questionId: number;
  answer: { label: string; value: string };
};

export type StoredAnswersType = StoredAnswerType[];

export interface AppContextType {
  quizData: QuizDataStoredType;
  updateQuizData: (newData: QuizDataStoredType) => void;
  currentQuestion: CurrentQuestionType;
  updateCurrentQuestion: (newData: CurrentQuestionType) => void;
  handleNext: () => void;
  handlePrevious: () => void;
  storedAnswers: StoredAnswersType;
  addToStoredAnswers: (newAnswer: StoredAnswerType) => void;
  removeFromStoredAnswers: (answerId: number) => void;
  handleReset: () => void;
}
