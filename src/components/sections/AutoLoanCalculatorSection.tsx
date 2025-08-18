import FeaturesList from "../UI/FeaturesList";
import "../../styles/mdoule.css";
import Btn from "../UI/buttons/Btn";
import AutoLoanCalculatorForm from "../forms/AutoLoanCalculatorForm";

function AutoLoanListItem({
  src,
  alt,
  title,
  description,
}: {
  src: string;
  alt: string;
  title: string;
  description: string;
}) {
  return (
    <FeaturesList
      image={{ src, alt }}
      imageStyle={{ width: 42.29, height: 41.51 }}
      spanStyle="flex gap-2 flex-col"
      listStyle="gap-2 h-fit"
    >
      <span className="heading-list-title">{title}</span>
      <span className="heading-list-description">{description}</span>
    </FeaturesList>
  );
}

function AutoLoanCalculatorSection() {
  const handlCalculation = () => {
    // Logic to handle calculation can be added here
    console.log("Calculate Your Loan button clicked");
  };

  return (
    <section className="bg-gray-medium-300 py-[75px]">
      <div className="container flex items-center justify-center gap-8">
        {/* Left Section */}
        <div className="font-inter">
          <h2 className="text-foundation-brown-darker text-[30px] leading-[36px] font-semibold">
            Auto Loan Calculator
          </h2>
          <p className="text-foundation-gray-normal-active mt-[28px] max-w-[65ch] text-[20px] leading-[32px] font-normal">
            Calculate your monthly car payment instantly. Get accurate estimates
            to help you budget for your dream vehicle.
          </p>

          <ul className="auto-loan-calculator-list mt-[28px] flex flex-col gap-y-6">
            <AutoLoanListItem
              src="/icons/arrow-in-a-rectangle.svg"
              alt="arrow in a rectanlge icon"
              title="Competitive Rates"
              description="Our rates start as low as 2.9% APR for qualified buyers with excellent credit."
            />
            <AutoLoanListItem
              src="/icons/checkbox.svg"
              alt="checkbox icon"
              title="Quick Approval :"
              description="Get pre-approved in minutes with our streamlined application
                process."
            />
            <AutoLoanListItem
              src="/icons/calendar.svg"
              alt="acalendar icon"
              title="Flexible Terms :"
              description="Choose from loan terms up to 84 months to find the payment that
                fits your budget."
            />
          </ul>

          <div className="mt-[28px] flex items-center justify-start gap-[29px]">
            <Btn handleClick={handlCalculation}>Calculate Your Loan</Btn>
            <Btn handleClick={handlCalculation}>Calculate Your Loan</Btn>
          </div>
        </div>

        {/* Right Section */}
        <AutoLoanCalculatorForm />
      </div>
    </section>
  );
}

export default AutoLoanCalculatorSection;
