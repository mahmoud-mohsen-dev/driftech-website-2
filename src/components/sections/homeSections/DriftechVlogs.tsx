import carImage2 from "../../../assets/slider/black-mini-coupe-road-1.png";
import SliderSection from "../../slider/SliderSection";

function DriftechVlogs() {
  const driftechVlogsData = [
    {
      imgSrc: carImage2,
      imgAlt: "carImage",
      title: "2025 Audi Review",
      time: "01:24",
    },
    {
      imgSrc: carImage2,
      imgAlt: "carImage",
      title: "2025 Audi Review",
      time: "01:24",
    },
    {
      imgSrc: carImage2,
      imgAlt: "carImage",
      title: "2025 Audi Review",
      time: "01:24",
    },
    {
      imgSrc: carImage2,
      imgAlt: "carImage",
      title: "2025 Audi Review",
      time: "01:24",
    },
    {
      imgSrc: carImage2,
      imgAlt: "carImage",
      title: "2025 Audi Review",
      time: "01:24",
    },
    {
      imgSrc: carImage2,
      imgAlt: "carImage",
      title: "2025 Audi Review",
      time: "01:24",
    },
    {
      imgSrc: carImage2,
      imgAlt: "carImage",
      title: "2025 Audi Review",
      time: "01:24",
    },
    {
      imgSrc: carImage2,
      imgAlt: "carImage",
      title: "2025 Audi Review",
      time: "01:24",
    },
    {
      imgSrc: carImage2,
      imgAlt: "carImage",
      title: "2025 Audi Review",
      time: "01:24",
    },
    {
      imgSrc: carImage2,
      imgAlt: "carImage",
      title: "2025 Audi Review",
      time: "01:24",
    },
  ];

  return (
    <SliderSection
      title="Driftech Vlogs"
      cardsData={driftechVlogsData}
      sectionClassName=""
      imagesClassName="h-[519px] relative"
      spaceBetween={41}
      isAVlogCard={true}
    />
  );
}

export default DriftechVlogs;
