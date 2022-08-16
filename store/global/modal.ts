import create from "zustand";

export interface QuestionModal {
  showingResults: boolean;
  currentQuestionIndex: number;
  setCurrentQuestionIndex: (questionIndex: number) => void;
  setShowingResults: (showingResults: boolean) => void;
}

export const useQuestionModal = create<QuestionModal>((set) => ({
  currentQuestionIndex: 0,
  showingResults: false,
  setCurrentQuestionIndex: (questionIndex: number) =>
    set(() => ({ currentQuestionIndex: questionIndex })),
  setShowingResults: (showingResults: boolean) =>
    set(() => ({ showingResults: showingResults })),
}));
