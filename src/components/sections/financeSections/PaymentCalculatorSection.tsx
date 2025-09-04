import Btn from "../../UI/buttons/Btn";
import CustomProgress from "../../UI/CustomProgress";
import AutoLoanCalculatorForm from "../../UI/forms/AutoLoanCalculatorForm";
import CustomRadioGroup from "../../UI/forms/CustomRadioGroup";
import modernImg from "../../../assets/backgrounds/modern-car.png";
import RadioItemLabel from "./RadioItemLabel";

function PaymentCalculatorSection({
  currentIndex,
  totalSteps,
  handleNextSection,
}: {
  currentIndex: number;
  totalSteps: number;
  handleNextSection: () => void;
}) {
  return (
    <div className="flex flex-col items-center gap-8 lg:flex-row">
      <section className="mt-6 w-full space-y-8 md:mt-10 lg:basis-1/2">
        <h1 className="text-foundation-gray-darker font-poppins text-[clamp(1rem,0.5357rem+2.3214vw,2.625rem)] leading-normal font-medium md:leading-[1.25]">
          Payment Calculator
        </h1>

        <div className="space-y-[7px] md:space-y-[13px]">
          <h4 className="text-foundation-gray-normal font-inter text-[clamp(0.7125rem,0.5589rem+0.7679vw,1.25rem)] leading-[1.2] font-medium">
            Step {currentIndex}/ {totalSteps}
          </h4>
          <CustomProgress
            steps={totalSteps}
            currentIndex={currentIndex}
            // percent={
            //   typeof currentIndex === "number" && typeof totalSteps === "number"
            //     ? (currentIndex / totalSteps) * 100
            //     : 0
            // }
          />
        </div>

        <div className="space-y-5">
          <h4 className="text-foundation-brown-normal font-poppins text-[clamp(1rem,0.9286rem+0.3571vw,1.25rem)] leading-normal font-medium">
            Choose Car Option
          </h4>
          <CustomRadioGroup
            options={[
              { label: "New", value: "new" },
              { label: "Per-owned car", value: "pre-owned" },
            ]}
            groupClassName="flex items-center gap-6 w-full"
            // radioItemClassName=""
          />
        </div>

        <AutoLoanCalculatorForm />

        <div className="hidden items-center justify-between gap-4 lg:flex">
          {/* {typeof currentIndex === "number" && currentIndex > 1 && ( */}
          {/* <Btn
            variant="outline-for-bg-light"
            className="font-poppins mr-auto rounded-[0.29625rem] text-[clamp(0.75rem,0.5357rem+1.0714vw,1.5rem)] font-medium lg:rounded-[0.56875rem]"
            width="w-[91px] md:w-[174px]"
            height="h-[30px] md:h-[53px]"
            //   handleClick={goPrevious}
          >
            Back
          </Btn> */}
          {/* )} */}
          {/* {typeof currentIndex === "number" &&
            Array.isArray(quizData) &&
            currentIndex < quizData.length && ( */}
          <Btn
            className="font-poppins ml-auto rounded-[0.29625rem] text-[clamp(0.75rem,0.5357rem+1.0714vw,1.5rem)] font-medium lg:rounded-[0.56875rem]"
            width="w-[91px] md:w-[174px]"
            height="h-[30px] md:h-[53px]"
            // handleClick={() => goNext()}
            handleClick={() => handleNextSection()}
          >
            Next
          </Btn>
          {/* )} */}
          {/* {typeof currentIndex === "number" &&
            Array.isArray(quizData) &&
            currentIndex === quizData.length && ( */}
          {/* <Btn
                className="ml-auto rounded-[0.29625rem] lg:rounded-[0.56875rem] font-poppins font-medium"
                width="w-[91px] md:w-[174px]"
                height="h-[30px] md:h-[53px]"
                variant="for-bg-dark-without-border"
                // handleClick={handleSubmit}
              >
                Submit
              </Btn> */}
          {/* )} */}
        </div>
      </section>
      <section className="w-full lg:basis-1/2">
        <h4 className="text-foundation-brown-normal font-poppins text-[clamp(1rem,0.9286rem+0.3571vw,1.25rem)] leading-normal font-medium">
          Choose Your Car
        </h4>
        <div className="mt-[22px] w-full">
          <CustomRadioGroup
            options={[
              {
                label: (
                  <RadioItemLabel
                    img={{ src: modernImg, alt: "Toyota 2022" }}
                    title="Toyta-2022"
                    categories={["1st Catehory", "Automatic", "55,500 KM"]}
                  />
                ),
                value: "toyota-2022-1",
              },
              {
                label: (
                  <RadioItemLabel
                    img={{ src: modernImg, alt: "Toyota 2022" }}
                    title="Toyta-2022"
                    categories={["1st Catehory", "Automatic", "55,500 KM"]}
                  />
                ),
                value: "toyota-2022-2",
              },
              {
                label: (
                  <RadioItemLabel
                    img={{ src: modernImg, alt: "Toyota 2022" }}
                    title="Toyta-2022"
                    categories={["1st Catehory", "Automatic", "55,500 KM"]}
                  />
                ),
                value: "toyota-2022-3",
              },
              {
                label: (
                  <RadioItemLabel
                    img={{ src: modernImg, alt: "Toyota 2022" }}
                    title="Toyta-2022"
                    categories={["1st Catehory", "Automatic", "55,500 KM"]}
                  />
                ),
                value: "toyota-2022-4",
              },
              {
                label: (
                  <RadioItemLabel
                    img={{ src: modernImg, alt: "Toyota 2022" }}
                    title="Toyta-2022"
                    categories={["1st Catehory", "Automatic", "55,500 KM"]}
                  />
                ),
                value: "toyota-2022-5",
              },
            ]}
            groupClassName="flex items-center flex-col gap-6 w-full"
            radioItemClassName="px-[18px] py-[19px] w-full"
          />
        </div>
        <div className="mt-6 flex items-center justify-between gap-4 lg:hidden">
          {/* {typeof currentIndex === "number" && currentIndex > 1 && ( */}
          {/* <Btn
            variant="outline-for-bg-light"
            className="font-poppins mr-auto rounded-[0.29625rem] text-[clamp(0.75rem,0.5357rem+1.0714vw,1.5rem)] font-medium lg:rounded-[0.56875rem]"
            width="w-[91px] md:w-[174px]"
            height="h-[30px] md:h-[53px]"
            //   handleClick={goPrevious}
          >
            Back
          </Btn> */}
          {/* )} */}
          {/* {typeof currentIndex === "number" &&
            Array.isArray(quizData) &&
            currentIndex < quizData.length && ( */}
          <Btn
            className="font-poppins ml-auto rounded-[0.29625rem] text-[clamp(0.75rem,0.5357rem+1.0714vw,1.5rem)] font-medium lg:rounded-[0.56875rem]"
            width="w-[91px] md:w-[174px]"
            height="h-[30px] md:h-[53px]"
            // handleClick={() => goNext()}
            handleClick={() => handleNextSection()}
          >
            Next
          </Btn>
          {/* )} */}
          {/* {typeof currentIndex === "number" &&
            Array.isArray(quizData) &&
            currentIndex === quizData.length && ( */}
          {/* <Btn
                className="ml-auto rounded-[0.29625rem] lg:rounded-[0.56875rem] font-poppins font-medium"
                width="w-[91px] md:w-[174px]"
                height="h-[30px] md:h-[53px]"
                variant="for-bg-dark-without-border"
                // handleClick={handleSubmit}
              >
                Submit
              </Btn> */}
          {/* )} */}
        </div>
      </section>
    </div>
  );
}

export default PaymentCalculatorSection;
