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
      slidesPerView={1.2}
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

export default DriftechVlogs;
