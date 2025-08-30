import FilterRadioGroup from "../../UI/forms/FilterRadioGroup";
// import carImage2 from "../../../assets/slider/black-mini-coupe-road-1.png";
import carImage2 from "../../../assets/slider/vlog-car-1.jpg";
import VlogCard from "../../UI/cards/VlogCard";
import { v4 } from "uuid";

function DriftechVlogsSection() {
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
  ];

  return (
    <section className="font-poppins py-20">
      <div className="container space-y-8">
        <div className="flex flex-col items-center justify-between gap-5">
          <h1 className="text-black-medium text-[1.875rem] leading-[2.8125rem] font-semibold">
            Driftech Vlogs
          </h1>
          <p className="text-foundation-gray-normal text-[clamp(0.875rem,0.8036rem+0.3571vw,1.125rem)] leading-normal">
            Watch exciting car videos and explore every model in style.
          </p>
          <FilterRadioGroup />
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-[3.5rem]">
          {driftechVlogsData.map((card) => (
            <VlogCard
              key={v4()}
              imgSrc={card.imgSrc}
              imgAlt={card.imgAlt}
              title={card.title}
              time={card.time}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default DriftechVlogsSection;
