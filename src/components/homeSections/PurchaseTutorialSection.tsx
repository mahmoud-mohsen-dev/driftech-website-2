import HorizontalFeatureCard from "../UI/cards/HorizontalFeatureCard";
import ServiceImage1 from "../../assets/sections/services/service-1.png";
import ServiceImage2 from "../../assets/sections/services/service-2.png";
import ServiceImage3 from "../../assets/sections/services/service-3.png";

function PurchaseTutorialSection() {
  return (
    <section>
      <div className="container flex justify-center gap-[18px]">
        {/* How to Get Your Car ? Section */}
        <div className="font-inter flex w-full flex-col items-start justify-center gap-3">
          <div className="flex items-center gap-[6px]">
            <img src="/icons/educare-(ekt).svg" alt="educare-(ekt)" />
            <h4 className="text-foundation-orange-normal text-[20px] leading-[24px] font-medium">
              How to Get Your Car ?
            </h4>
          </div>

          <h2 className="text-foundation-brown-darker text-[30px] leading-[36px] font-semibold">
            Purchase a car in{" "}
            <span className="text-foundation-orange-normal font-semibold">
              3 steps
            </span>
          </h2>

          <p className="text-foundation-gray-normal-hover text-[18px] leading-[30px] font-normal text-balance">
            From choosing your dream car to securing the perfect financing plan,
            we make the journey simple, fast, and tailored to you.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex w-full flex-col gap-[28px]">
          <HorizontalFeatureCard
            heading="Pick Your Car .. From Anywhere"
            description="Find your dream car from a dealership, online listing, or even a private seller. With Driftech, you’re not limited to showroom stock, we finance any car you choose."
            image={{
              src: ServiceImage1,
              alt: "Pick Your Car .. From Anywhere",
            }}
          />
          <HorizontalFeatureCard
            heading="Get Your Financing Plan"
            description="Tell us your budget, down payment, and preferred installment period. Our Smart Car Matching system compares offers from 25+ finance partners to give you the best payment plan in minutes."
            image={{ src: ServiceImage2, alt: "Get Your Financing Plan" }}
          />
          <HorizontalFeatureCard
            heading="Get Your Financing Plan"
            description="Find your dream car from a dealership, online listing, or even a private seller. With Driftech, you’re not limited to showroom stock, we finance any car you choose."
            image={{ src: ServiceImage3, alt: "Get Your Financing Plan" }}
          />
        </div>
      </div>
    </section>
  );
}

export default PurchaseTutorialSection;
