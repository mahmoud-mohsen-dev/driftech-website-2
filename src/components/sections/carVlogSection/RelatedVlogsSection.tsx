import { v4 } from "uuid";
import RelatedVlogCard from "../../UI/cards/RelatedVlogCard";
import vlogCardImg from "../../../assets/sections/black-mini-coupe-road-big.jpg";

function RelatedVlogsSection() {
  return (
    <section className="font-poppins">
      <div className="flex flex-col items-center justify-center gap-5">
        <h2 className="text-black-medium text-[clamp(1.5rem,1.3929rem+0.5357vw,1.875rem)] leading-normal font-semibold">
          Driftech Vlogs
        </h2>
        <h4 className="text-foundation-gray-normal text-[clamp(1rem,0.9643rem+0.1786vw,1.125rem)] leading-none">
          Watch exciting car videos and explore every model in style.
        </h4>
      </div>
      <div className="mt-[2.625rem] grid grid-cols-1 gap-y-14 xl:grid-cols-2">
        <RelatedVlogCard
          imgSrc={vlogCardImg}
          imgAlt="black mini coupe road"
          key={v4()}
        />
        <RelatedVlogCard
          imgSrc={vlogCardImg}
          imgAlt="black mini coupe road"
          key={v4()}
        />
        <RelatedVlogCard
          imgSrc={vlogCardImg}
          imgAlt="black mini coupe road"
          key={v4()}
        />
        <RelatedVlogCard
          imgSrc={vlogCardImg}
          imgAlt="black mini coupe road"
          key={v4()}
        />
        <RelatedVlogCard
          imgSrc={vlogCardImg}
          imgAlt="black mini coupe road"
          key={v4()}
        />
        <RelatedVlogCard
          imgSrc={vlogCardImg}
          imgAlt="black mini coupe road"
          key={v4()}
        />
      </div>
    </section>
  );
}

export default RelatedVlogsSection;
