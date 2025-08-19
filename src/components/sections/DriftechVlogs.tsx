import carImage2 from "../../assets/slider/black-mini-coupe-road-1.png";
import SliderSection from "../slider/SliderSection";

function DriftechVlogs() {
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
  );
}

export default DriftechVlogs;
