import carImage from "../../../assets/slider/car-1.png";
import motorcycleImage from "../../../assets/slider/motorcycle-1.png";
import SliderSection from "../../slider/SliderSection";

function VehicleFinancingSection() {
  const VehicleFinancingImages = [
    { imgSrc: carImage, imgAlt: "carImage" },
    { imgSrc: motorcycleImage, imgAlt: "motorcycleImage" },
    { imgSrc: carImage, imgAlt: "carImage" },
    { imgSrc: motorcycleImage, imgAlt: "motorcycleImage" },
    { imgSrc: carImage, imgAlt: "carImage" },
    { imgSrc: motorcycleImage, imgAlt: "motorcycleImage" },
    { imgSrc: carImage, imgAlt: "carImage" },
    { imgSrc: motorcycleImage, imgAlt: "motorcycleImage" },
  ];
  return (
    <SliderSection
      title="Vehicle Financing"
      cardsData={VehicleFinancingImages}
      addAfterHeading={true}
    />
  );
}

export default VehicleFinancingSection;
