import LabelInput from "./LabelInput";

import Counter from "../../../assets/backgrounds/counter.png";
import Btn from "../buttons/Btn";

function AutoLoanCalculatorForm() {
  const handleReset = () => {};

  const handleSubmit = () => {};

  return (
    <form className="font-poppins bg-neutral-0 shadow-partner-image flex flex-col gap-[19.85px] rounded-[9.93px] px-8 py-7">
      <div>
        {/* <div className="" /> */}
        <h3 className="border-foundation-orange-normal text- text-black-medium border-l-4 pl-2 text-[20px] font-medium capitalize">
          Auto Loan Calculator
        </h3>
      </div>

      <h5 className="text-foundation-gray-normal max-w-[60ch] text-xs leading-[15px] font-medium">
        Use this calculator to estimate your monthly car payment and see
        detailed loan breakdown.
      </h5>

      <div className="space-y-4">
        <LabelInput
          id="carPrice"
          label="Car Price"
          placeholder="25,000.0 EGP"
          inputClassName="px-2"
        />
        <LabelInput
          id="downPayment"
          label="Down payment"
          placeholder="25,000.0 EGP"
          inputClassName="px-2"
        />
        <LabelInput
          id="ChoosePeriod"
          label="Choose period"
          // placeholder="84 month ( 7 years )"
          isSelect={true}
          options={[{ label: "84 month ( 7 years )", value: "84" }]}
        />
      </div>

      <img
        src={Counter}
        alt="Counter Image"
        className="mx-auto w-fit"
        width={222}
      />

      <h4 className="text-primary text-center text-[15.71px] leading-6 font-semibold">
        15.576 LE/60
      </h4>

      <div className="flex w-full items-center gap-[26px]">
        <Btn
          handleClick={handleReset}
          variant="outline-for-bg-light"
          className="font-poppins rounded-[6.62px] border-[1.5px] text-base leading-6 font-semibold"
          width="w-full"
        >
          Reset
        </Btn>
        <Btn
          handleClick={handleSubmit}
          width="w-full"
          className="font-poppins rounded-[6.62px] text-base leading-6 font-semibold"
        >
          Apply Now
        </Btn>
      </div>
    </form>
  );
}

export default AutoLoanCalculatorForm;
