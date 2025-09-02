import { Progress, Grid } from "antd";
import Answers from "./Answers";
import Btn from "../../UI/buttons/Btn";

const { useBreakpoint } = Grid;

const QuizData = [
  {
    question: "What type of car are you looking for?",
    options: ["Sedan", "Suv", "Hatchback", "Crossover"],
  },
  {
    question: "What type of car are you looking for?",
    options: ["Used Car", "New Car"],
  },
  {
    question: " What is your budget range?",
    options: [
      "Less than EGP 500,000",
      "EGP 500,000 – 750,000",
      "EGP 750,000-1,000,000",
      "More than EGP 1,000,000",
    ],
  },
];

function QuizMainSection() {
  // const [currentQu, setCurrent] = useState(0);
  const screens = useBreakpoint();
  console.log(screens);
  const barHeight = screens.lg ? 16 : 8; // lg breakpoint and above → 16px, else 8px

  const convertedQuizData =
    QuizData && QuizData.length > 0
      ? QuizData.map((item) => ({
          questions: item.question,
          answers:
            item?.options && item?.options.length > 0
              ? item.options.map((option) => ({
                  label: option,
                  value: option,
                }))
              : [],
        }))
      : [];

  const currentQuestion = convertedQuizData[0];
  const currentIndex = 1 + 1;
  const totalQuestions = convertedQuizData.length;

  const answersData = currentQuestion.answers;

  const handleNext = () => {};

  const handleBack = () => {};

  return (
    <section className="font-poppins mt-10 lg:mt-12.5">
      <div className="mx-auto flex w-full max-w-[41.1875rem] flex-col gap-8">
        <h1 className="font-inter text-center text-[clamp(1.375rem,1.0179rem+1.7857vw,2.625rem)] leading-[1.2] font-medium text-black">
          Discover Your Car
        </h1>

        <div className="flex flex-col gap-3">
          <h4 className="text-foundation-gray-normal font-inter text-[clamp(0.625rem,0.4821rem+0.7143vw,1.125rem)] leading-[1.24] font-medium">
            Quastion {currentIndex}/ {totalQuestions}
          </h4>
          <Progress
            percent={50}
            status="active"
            strokeColor="#e73201"
            trailColor="#E5E7EB"
            showInfo={false}
            size={{ height: barHeight }}
          />
        </div>

        <div className="font-poppins flex flex-col gap-8">
          <div className="bg-foundation-orange-light-hover border-l-foundation-orange-normal flex h-[54px] flex-col justify-center rounded-xl border-l-8 px-[12px] lg:h-[104px]">
            <h2 className="text-[clamp(0.75rem,0.6071rem+0.7143vw,1.25rem)] leading-[1.2] text-black">
              {QuizData[0].question}
            </h2>
          </div>
          {/* <div className="space-y-6 mt-5"> */}
          <Answers answersData={answersData} />

          <div className="flex items-center justify-between gap-4">
            {currentIndex > 1 && (
              <Btn
                variant="outline-for-bg-light"
                className="mr-auto rounded-[0.29625rem] lg:rounded-[0.56875rem]"
                width="w-[91px] lg:w-[174px]"
                height="h-[30px] lg:h-[53px]"
                handleClick={handleBack}
                // shadowColorNotPressed="shadow-foundation-orange-normal/50"
              >
                Back
              </Btn>
            )}
            <Btn
              className="ml-auto rounded-[0.29625rem] lg:rounded-[0.56875rem]"
              width="w-[91px] lg:w-[174px]"
              height="h-[30px] lg:h-[53px]"
              handleClick={handleNext}
            >
              Next
            </Btn>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuizMainSection;
