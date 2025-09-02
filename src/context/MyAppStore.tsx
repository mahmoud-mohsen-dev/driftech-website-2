import { useCallback, useState } from "react";
import type {
  CurrentQuestionType,
  QuizDataStoredType,
  StoredAnswersType,
  StoredAnswerType,
} from "../types/globalTypes";
import { MyAppStoreContext } from "./MyAppStoreContext";

export const MyAppStoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [quizData, setQuizData] = useState<QuizDataStoredType>([
    {
      id: 1,
      question: "What type of car are you looking for?",
      options: [
        { label: "Sedan", value: "Sedan" },
        { label: "Suv", value: "Suv" },
        { label: "Hatchback", value: "Hatchback" },
        { label: "Crossover", value: "Crossover" },
      ],
    },
    {
      id: 2,
      question: "What type of car are you looking for?",
      options: [
        { label: "Used Car", value: "Used Car" },
        { label: "New Car", value: "New Car" },
      ],
    },
    {
      id: 3,
      question: "What is your budget range?",
      options: [
        { label: "Less than EGP 500,000", value: "Less than EGP 500,000" },
        { label: "EGP 500,000 – 750,000", value: "EGP 500,000 – 750,000" },
        { label: "EGP 750,000-1,000,000", value: "EGP 750,000-1,000,000" },
        { label: "More than EGP 1,000,000", value: "More than EGP 1,000,000" },
      ],
    },
  ]);
  const [currentQuestion, setCurrentQuestion] = useState<CurrentQuestionType>({
    data: Array.isArray(quizData) && quizData.length > 0 ? quizData[0] : null,
    index: 0,
  });
  const [storedAnswers, setStoredAnswers] = useState<StoredAnswersType>([]);

  const currentIndex = currentQuestion?.index ?? null;

  const updateQuizData = (newData: QuizDataStoredType) => {
    setQuizData(newData);
  };

  const updateCurrentQuestion = (newData: CurrentQuestionType) => {
    setCurrentQuestion(newData);
  };

  const handleNext = () => {
    if (typeof currentIndex !== "number") return;
    if (quizData === null || !Array.isArray(quizData) || quizData.length === 0)
      return;

    const nextQuestion = quizData[currentIndex + 1] ?? null;
    if (nextQuestion) {
      updateCurrentQuestion({ data: nextQuestion, index: currentIndex + 1 });
    }
  };

  const handlePrevious = () => {
    if (typeof currentIndex !== "number") {
      console.log("currentIndex is not a number @handlePrevious");
      return;
    }
    if (
      quizData === null ||
      !Array.isArray(quizData) ||
      quizData.length === 0
    ) {
      return;
    }

    const previousQuestion = quizData[currentIndex - 1];
    if (previousQuestion) {
      updateCurrentQuestion({
        data: previousQuestion,
        index: currentIndex - 1,
      });
    }
  };

  const addToStoredAnswers = (newAnswer: StoredAnswerType) => {
    setStoredAnswers((prev) => {
      // check if the question already has an answer stored
      const existingIndex = prev.findIndex(
        (ans) => ans.questionId === newAnswer.questionId,
      );

      if (existingIndex !== -1) {
        // update the existing answer
        const updated = [...prev];
        updated[existingIndex] = newAnswer;
        return updated;
      }

      // add new answer
      return [...prev, newAnswer];
    });
  };
  const removeFromStoredAnswers = (answerId: number) => {
    setStoredAnswers((prev) => {
      // remove the answer with this questionId
      return prev.filter((ans) => ans.questionId !== answerId);
    });
  };

  // const handleReset = () => {
  //   if (Array.isArray(quizData) && quizData.length > 0) {
  //     updateCurrentQuestion({ data: quizData[0], index: 0 });
  //     setStoredAnswers([]);
  //   } else {
  //     console.error("No questions found in the quiz data.");
  //   }
  // };

  const handleReset = useCallback(() => {
    if (Array.isArray(quizData) && quizData.length > 0) {
      updateCurrentQuestion({ data: quizData[0], index: 0 });
      setStoredAnswers([]);
    } else {
      console.error("No questions found in the quiz data.");
    }
  }, [quizData]); // stable dependency

  return (
    <MyAppStoreContext.Provider
      value={{
        quizData,
        updateQuizData,
        currentQuestion,
        updateCurrentQuestion,
        handleNext,
        handlePrevious,
        storedAnswers,
        addToStoredAnswers,
        removeFromStoredAnswers,
        handleReset,
      }}
    >
      {children}
    </MyAppStoreContext.Provider>
  );
};
