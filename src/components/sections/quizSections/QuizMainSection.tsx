import { Progress, Grid, type RadioChangeEvent } from "antd";
import Answers from "./Answers";
import Btn from "../../UI/buttons/Btn";
import { useMyAppStore } from "../../../hooks/useMyAppStore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import StoredAnswer from "./StoredAnswer";
import { v4 } from "uuid";
import { useToast } from "../../../hooks/useToast";
import type { StoredAnswerType } from "../../../types/globalTypes";

const { useBreakpoint } = Grid;

function QuizMainSection() {
  const screens = useBreakpoint();
  const barHeight = screens.lg ? 16 : 8; // lg breakpoint and above → 16px, else 8px

  const {
    quizData,
    currentQuestion,
    handleNext,
    handlePrevious,
    addToStoredAnswers,
    removeFromStoredAnswers,
    storedAnswers,
    handleReset,
  } = useMyAppStore();
  const { error } = useToast();

  const [currentSelectedAnswer, setCurrentSelectedAnswer] = useState<
    { label: string; value: string } | undefined
  >(undefined);

  const navigate = useNavigate();

  const totalQuestions =
    Array.isArray(quizData) && quizData.length > 0 ? quizData.length : 0;

  const currentIndex =
    typeof currentQuestion.index === "number"
      ? currentQuestion.index + 1
      : null;

  console.log("currentQuestion", currentQuestion);
  console.log("currentIndex", currentIndex);

  useEffect(() => {
    // run on mount (and page reload counts as a fresh mount)
    handleReset();

    return () => {
      // run on unmount
      handleReset();
    };
  }, [handleReset]);

  useEffect(() => {
    const currentQuestionId = currentQuestion?.data?.id ?? null;
    if (typeof currentQuestionId !== "number") {
      console.log("useEffect triggered: currentQuestionId", currentQuestionId);
      setCurrentSelectedAnswer(undefined);
      return;
    }

    const existingAnswer = storedAnswers.find(
      (ans) => ans.questionId === currentQuestionId,
    );

    if (existingAnswer) {
      setCurrentSelectedAnswer(existingAnswer.answer); // restore previous answer
    } else {
      setCurrentSelectedAnswer(undefined); // no answer yet
    }
  }, [currentQuestion, storedAnswers]);

  const handleChange = (e: RadioChangeEvent) => {
    const selectedValue = e.target.value; // this is a string
    if (
      Array.isArray(currentQuestion?.data?.options) &&
      currentQuestion.data.options.length > 0
    ) {
      const selectedOption = currentQuestion.data.options.find(
        (opt) => opt.value === selectedValue,
      );

      if (selectedOption) {
        setCurrentSelectedAnswer(selectedOption);
      }
    }
  };

  const goPrevious = () => {
    // const currentQuestionId = currentQuestion?.data?.id ?? null;
    // if (currentQuestionId) {
    //   removeFromStoredAnswers(currentQuestionId);
    // }
    setCurrentSelectedAnswer(undefined);
    handlePrevious();
  };

  const validateAnswers = (allStoredAnswers: StoredAnswerType[]) => {
    console.log("allStoredAnswers", allStoredAnswers);
    console.log(
      quizData !== null &&
        allStoredAnswers !== null &&
        allStoredAnswers.length !== quizData.length,
    );
    if (
      quizData !== null &&
      allStoredAnswers !== null &&
      allStoredAnswers.length !== quizData.length
    ) {
      console.log("Please answer all questions before submitting.");
      error("Please answer all questions before submitting.");
      return false;
    }

    return true;
  };

  const goNext = ({ isLast }: { isLast?: boolean } = {}) => {
    // setIsAnswered(false);
    if (currentSelectedAnswer?.value && currentQuestion?.data?.id) {
      const answeredQuestionData = {
        questionId: currentQuestion.data.id,
        answer: {
          label: currentSelectedAnswer.label,
          value: currentSelectedAnswer.value,
        },
      };
      if (isLast) {
        const isValid = validateAnswers([
          ...storedAnswers,
          answeredQuestionData,
        ]);
        if (!isValid) {
          return false;
        }
      }
      addToStoredAnswers(answeredQuestionData);
      setCurrentSelectedAnswer(undefined);
      handleNext();
      return true;
    }

    return false;
  };

  const handleSubmit = () => {
    const isValid = goNext({ isLast: true });
    console.log("storedAnswers", storedAnswers);

    if (!isValid) return;
    navigate("/");
  };

  const handleDelete = (questionId: number) => {
    console.log("@handleDelete questionId", questionId);
    removeFromStoredAnswers(questionId);
    // setCurrentSelectedAnswer(undefined);
    // handlePrevious();
  };

  return (
    <section className="font-poppins mt-10 lg:mt-12.5">
      <div className="mx-auto flex w-full max-w-[41.1875rem] flex-col gap-6 md:gap-8">
        <h1 className="font-inter text-center text-[clamp(1.375rem,1.0179rem+1.7857vw,2.625rem)] leading-[1.2] font-medium text-black">
          Discover Your Car
        </h1>

        <div className="flex flex-col gap-3">
          <h4 className="text-foundation-gray-normal font-inter text-[clamp(0.625rem,0.4821rem+0.7143vw,1.125rem)] leading-[1.24] font-medium">
            Quastion {typeof currentIndex == "number" ? currentIndex : "?"}/{" "}
            {typeof totalQuestions == "number" ? totalQuestions : "?"}
          </h4>
          <Progress
            percent={
              typeof currentIndex === "number" &&
              typeof totalQuestions === "number"
                ? (currentIndex / totalQuestions) * 100
                : 0
            }
            status="active"
            strokeColor="#e73201"
            trailColor="#E5E7EB"
            showInfo={false}
            size={{ height: barHeight }}
          />
        </div>

        <div className="font-poppins flex flex-col gap-6 md:gap-8">
          <div className="flex flex-wrap items-center justify-start gap-3.5 md:gap-8">
            {storedAnswers.map((ans) => (
              <StoredAnswer
                key={v4()}
                handleDelete={() => {
                  const questionId = ans?.questionId ?? null;
                  if (typeof questionId === "number") {
                    handleDelete(questionId);
                  }
                }}
              >
                {ans.answer.label}
              </StoredAnswer>
            ))}
          </div>

          <div className="bg-foundation-orange-light-hover border-l-foundation-orange-normal flex h-[54px] flex-col justify-center rounded-xl border-l-8 px-[12px] lg:h-[104px]">
            <h2 className="text-[clamp(0.75rem,0.6071rem+0.7143vw,1.25rem)] leading-[1.2] text-black">
              {Array.isArray(quizData) && quizData.length > 0
                ? quizData[0].question
                : "No question found"}
            </h2>
          </div>
          <Answers
            answersData={currentQuestion?.data?.options ?? []}
            currentSelectedAnswer={currentSelectedAnswer}
            handleChange={handleChange}
          />

          <div className="flex items-center justify-between gap-4">
            {typeof currentIndex === "number" && currentIndex > 1 && (
              <Btn
                variant="outline-for-bg-light"
                className="mr-auto rounded-[0.29625rem] lg:rounded-[0.56875rem]"
                width="w-[91px] md:w-[174px]"
                height="h-[30px] md:h-[53px]"
                handleClick={goPrevious}
              >
                Back
              </Btn>
            )}
            {typeof currentIndex === "number" &&
              Array.isArray(quizData) &&
              currentIndex < quizData.length && (
                <Btn
                  className="ml-auto rounded-[0.29625rem] lg:rounded-[0.56875rem]"
                  width="w-[91px] md:w-[174px]"
                  height="h-[30px] md:h-[53px]"
                  handleClick={() => goNext()}
                >
                  Next
                </Btn>
              )}
            {typeof currentIndex === "number" &&
              Array.isArray(quizData) &&
              currentIndex === quizData.length && (
                <Btn
                  className="ml-auto rounded-[0.29625rem] lg:rounded-[0.56875rem]"
                  width="w-[91px] md:w-[174px]"
                  height="h-[30px] md:h-[53px]"
                  variant="for-bg-dark-without-border"
                  handleClick={handleSubmit}
                >
                  Submit
                </Btn>
              )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuizMainSection;
