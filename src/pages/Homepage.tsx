import Footer from "../components/sections/Footer";
import HeroSection from "../components/sections/HeroSection";
import Header from "../components/sections/Header";
import CalculateLoanSection from "../components/sections/CalculateLoanSection";
import DrifterOffersSection from "../components/sections/DrifterOffersSection";
import TrustedPartnersSection from "../components/sections/TrustedPartnersSection";
import AutoLoanCalculatorSection from "../components/sections/AutoLoanCalculatorSection";
import SliderSection from "../components/slider/SliderSection";

import carImage from "../assets/slider/car-1.png";
import carImage2 from "../assets/slider/black-mini-coupe-road 1.png";
import motorcycleImage from "../assets/slider/motorcycle-1.png";

function Homepage() {
  const VehicleFinancingImages = [
    { src: carImage, alt: "carImage" },
    { src: motorcycleImage, alt: "motorcycleImage" },
    { src: carImage, alt: "carImage" },
    { src: motorcycleImage, alt: "motorcycleImage" },
    { src: carImage, alt: "carImage" },
    { src: motorcycleImage, alt: "motorcycleImage" },
    { src: carImage, alt: "carImage" },
    { src: motorcycleImage, alt: "motorcycleImage" },
    { src: carImage, alt: "carImage" },
    { src: motorcycleImage, alt: "motorcycleImage" },
    { src: carImage, alt: "carImage" },
    { src: motorcycleImage, alt: "motorcycleImage" },
  ];
  const DriftechVlogsImages = [
    { src: carImage2, alt: "carImage" },
    { src: carImage2, alt: "carImage" },
    { src: carImage2, alt: "carImage" },
    { src: carImage2, alt: "carImage" },
    { src: carImage2, alt: "carImage" },
    { src: carImage2, alt: "carImage" },
    { src: carImage2, alt: "carImage" },
    { src: carImage2, alt: "carImage" },
    { src: carImage2, alt: "carImage" },
    { src: carImage2, alt: "carImage" },
  ];
  return (
    <div className="">
      <Header />
      <main>
        <HeroSection />
        <CalculateLoanSection />
        <DrifterOffersSection />
        <TrustedPartnersSection />
        <AutoLoanCalculatorSection />

        <SliderSection
          title="Vehicle Financing"
          images={VehicleFinancingImages}
          addAfterHeading={true}
        />
        <SliderSection
          title="Driftech Vlogs"
          images={DriftechVlogsImages}
          sectionClassName=""
          imagesClassName="h-[519px] relative"
          spaceBetween={41}
        >
          <div className="absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center">
            <img
              src="/icons/play-video.svg"
              alt="play video icon"
              width={52}
              height={52}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            />
            <div className="absolute bottom-[14px] left-1/2 flex w-[347px] -translate-x-1/2 items-center justify-between">
              <span className="font-poppins text-neutral-0 text-[22px] leading-[33px] font-medium">
                2025 Audi Review
              </span>
              <span className="bg-gray-normal-opacity-80 font-poppins text-neutral-0 flex h-[24px] w-[65px] items-center justify-center rounded-full px-2.5 text-xs leading-[18px] font-normal">
                01:24
              </span>
            </div>
          </div>
        </SliderSection>
      </main>
      <Footer />
    </div>
  );
}

export default Homepage;
