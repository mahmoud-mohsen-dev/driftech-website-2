import carImage from "../../../assets/slider/car-1.png";
import motorcycleImage from "../../../assets/slider/motorcycle-1.png";
import SliderSection from "../../slider/SliderSection";

function VehicleFinancingSection() {
  const VehicleFinancingImages = [
    { imgSrc: carImage, imgAlt: "carImage", slug: "/finace/car-1" },
    {
      imgSrc: motorcycleImage,
      imgAlt: "motorcycleImage",
      slug: "/finace/car-1",
    },
    { imgSrc: carImage, imgAlt: "carImage", slug: "/finace/car-1" },
    {
      imgSrc: motorcycleImage,
      imgAlt: "motorcycleImage",
      slug: "/finace/car-1",
    },
    { imgSrc: carImage, imgAlt: "carImage", slug: "/finace/car-1" },
    {
      imgSrc: motorcycleImage,
      imgAlt: "motorcycleImage",
      slug: "/finace/car-1",
    },
    { imgSrc: carImage, imgAlt: "carImage", slug: "/finace/car-1" },
    {
      imgSrc: motorcycleImage,
      imgAlt: "motorcycleImage",
      slug: "/finace/car-1",
    },
  ];
  return (
    <SliderSection
      title="Vehicle Financing"
      cardsData={VehicleFinancingImages}
      addAfterHeading={true}
      slidesPerView={1.1}
      spaceBetween={41}
      breakpoints={{
        320: {
          slidesPerView: 1.075,
          spaceBetween: 18,
        },
        440: {
          slidesPerView: 1.3,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 41,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 3.5,
        },
        1440: {
          slidesPerView: 4,
        },
      }}
    />
  );
}

export default VehicleFinancingSection;
