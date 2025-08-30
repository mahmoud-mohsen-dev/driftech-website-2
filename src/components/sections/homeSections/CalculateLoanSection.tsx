import Btn from "../../UI/buttons/Btn";
import shakeHands from "../../../assets/sections/shake-hands.jpg";
import FeaturesList from "../../UI/FeaturesList";

function CalculateLoanSection() {
  const handleClick = () => {
    // Logic to calculate the loan can be added here
    console.log("Calculate Loan button clicked");
  };

  return (
    <section className="font-inter">
      <div className="container flex flex-col items-center gap-5 py-20 lg:flex-row lg:gap-[63.57px]">
        <div className="relative mx-auto w-[90%] lg:w-full">
          <img
            src={shakeHands}
            alt="shake hands"
            className="w-full object-cover"
          />
          <img
            src="/icons/discount-icon.svg"
            alt="discount icon"
            className="absolute -top-[26.48px] -right-[39.48px] z-10"
          />
        </div>
        <div className="flex flex-col items-start gap-9">
          <div>
            <p className="inline text-[30px] leading-[36px] font-semibold">
              <span className="text-foundation-brown-darker">
                Drive Home Your Dream Car with
              </span>{" "}
              <span className="text-foundation-orange-normal">
                Smart, Flexible Financing
              </span>
            </p>
            <p className="text-foundation-gray-normal-hover mt-[14px] text-[18px] leading-[30px] font-normal">
              Enjoy flexible payment plans and instant approval for your dream
              car. Our financing experts work with top lenders to secure the
              best rates and terms tailored to your budget.
            </p>
          </div>
          <ul className="flex flex-col gap-5">
            <FeaturesList
              image={{ src: "/icons/tick-square.svg", alt: "tick square" }}
            >
              Instant pre-approval in minutes
            </FeaturesList>
            <FeaturesList image={{ src: "/icons/clock.svg", alt: "clock" }}>
              Flexible payment terms up to 84 months
            </FeaturesList>
            <FeaturesList
              image={{ src: "/icons/security.svg", alt: "security" }}
            >
              Competitive rates starting at 2.9% APR
            </FeaturesList>
          </ul>
          <Btn handleClick={handleClick} className="rounded-lg">
            Financing
          </Btn>
        </div>
      </div>
    </section>
  );
}

export default CalculateLoanSection;
