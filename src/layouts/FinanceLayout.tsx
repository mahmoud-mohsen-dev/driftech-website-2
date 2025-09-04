import { Form } from "antd";
import Btn from "../components/UI/buttons/Btn";
import CustomProgress from "../components/UI/CustomProgress";
import { useForm } from "antd/es/form/Form";

function FinanceLayout({
  children,
  title,
  currentIndex,
  totalSteps,
  handlePreviousSection,
  handleNextSection,
  handleFinish,
}: {
  children: React.ReactNode;
  title: string;
  currentIndex: number;
  totalSteps: number;
  handlePreviousSection?: () => void;
  handleNextSection?: () => void;
  handleFinish?: () => void;
}) {
  const [form] = useForm();

  return (
    <div className="mx-auto mt-6 flex max-w-[626px] flex-col gap-8 lg:mt-12.5">
      <h1 className="text-foundation-gray-darker font-poppins text-center text-[clamp(1rem,0.5357rem+2.3214vw,2.625rem)] leading-normal font-medium md:leading-[1.25]">
        {title}
      </h1>

      <div className="space-y-[7px] md:space-y-[13px]">
        <h4 className="text-foundation-gray-normal font-inter text-[clamp(0.7125rem,0.5589rem+0.7679vw,1.25rem)] leading-[1.2] font-medium">
          Step {currentIndex}/ {totalSteps}
        </h4>
        <CustomProgress steps={totalSteps} currentIndex={currentIndex} />
      </div>
      <Form form={form}>{children}</Form>
      <div className="flex items-center justify-between gap-4">
        {handlePreviousSection && (
          <Btn
            variant="outline-for-bg-light"
            className="font-poppins mr-auto rounded-[0.29625rem] text-[clamp(0.75rem,0.5357rem+1.0714vw,1.5rem)] font-medium lg:rounded-[0.56875rem]"
            width="w-[91px] md:w-[174px]"
            height="h-[30px] md:h-[53px]"
            handleClick={() => handlePreviousSection()}
          >
            Back
          </Btn>
        )}
        {handleNextSection && (
          <Btn
            className="font-poppins ml-auto rounded-[0.29625rem] text-[clamp(0.75rem,0.5357rem+1.0714vw,1.5rem)] font-medium lg:rounded-[0.56875rem]"
            width="w-[91px] md:w-[174px]"
            height="h-[30px] md:h-[53px]"
            handleClick={() => handleNextSection()}
          >
            Next
          </Btn>
        )}
        {handleFinish && (
          <Btn
            className="font-poppins ml-auto rounded-[0.29625rem] text-[clamp(0.75rem,0.5357rem+1.0714vw,1.5rem)] font-medium lg:rounded-[0.56875rem]"
            width="w-[91px] md:w-[174px]"
            height="h-[30px] md:h-[53px]"
            handleClick={() => handleFinish()}
          >
            Submit
          </Btn>
        )}
      </div>
    </div>
  );
}

export default FinanceLayout;
