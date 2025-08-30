import carImage from "../../../assets/slider/car-1.png";
import motorcycleImage from "../../../assets/slider/motorcycle-1.png";
import SliderSection from "../../slider/SliderSection";

function VehicleFinancingSection() {
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
  return (
    <SliderSection
      title="Vehicle Financing"
      images={VehicleFinancingImages}
      addAfterHeading={true}
    />
  );
}

export default VehicleFinancingSection;
