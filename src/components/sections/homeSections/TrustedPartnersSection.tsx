import egbank from "../../../assets/sections/partenrs/eg-bank.png";
import aman from "../../../assets/sections/partenrs/aman.png";
import driveFinance from "../../../assets/sections/partenrs/drive-finance.png";

function TrustedPartnersSection() {
  return (
    <section className="bg-neutral-0 pt-[55px] pb-[80px]">
      <div className="container flex flex-wrap items-center justify-center gap-[32px]">
        <div className="font-inter lg:w-[calc(50%-16px)]">
          <h4 className="flex w-fit items-center justify-start gap-[18px]">
            <img
              src="/icons/shield-tick.svg"
              alt="shield tick icon"
              height={24}
              width={24}
            />
            <span className="text-foundation-orange-normal text-[20px] leading-[24px] font-medium">
              Our Trusted Partners
            </span>
          </h4>
          <h2 className="text-foundation-brown-darker mt-[14px] text-[30px] leading-[36px] font-semibold">
            Trusted Partners You Can Always Rely On for a Seamless Car Buying
            Journey
          </h2>
          <p className="text-foundation-gray-normal-hover mt-[14px] text-[18px] leading-[30px] font-normal">
            We collaborate with leading dealers and financial institutions to
            make your car purchase smooth and reliable.
          </p>
        </div>

        <div className="h-[576px] lg:w-[calc(50%-32px)] xl:grid xl:grid-cols-2 xl:grid-rows-2">
          <img
            src={egbank}
            alt="EG Bank"
            width={271}
            height={271}
            className="shadow-partner-image h-[271px] w-[271px] overflow-hidden rounded-[27.1px]"
          />
          <img
            src={aman}
            alt="Aman"
            width={200}
            height={200}
            className="h-[200px] w-[200px] overflow-hidden rounded-[27.1px] xl:relative xl:top-[114px] xl:left-[34px]"
          />
          <img
            src={driveFinance}
            alt="Drive Finance"
            width={155}
            height={155}
            className="h-[155px] w-[155px] overflow-hidden rounded-[27.1px] xl:relative xl:right-[-32px] xl:bottom-[48px] xl:place-self-end"
          />
          <img
            src={aman}
            alt="Aman"
            width={200}
            height={200}
            className="h-[200px] w-[200px] overflow-hidden rounded-[27.1px] xl:place-self-end"
          />
        </div>
      </div>
    </section>
  );
}

export default TrustedPartnersSection;
