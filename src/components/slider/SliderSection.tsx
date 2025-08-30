import type { SwiperOptions } from "swiper/types";
import type { CardsDataType } from "../../types/cardsSliderTypes";
import ImageSlider from "./ImageSlider";

function SliderSection({
  title,
  cardsData,
  sectionClassName = "py-[80px]",
  imagesClassName = "h-[367px] w-full rounded-lg",
  spaceBetween,
  // children,
  addAfterHeading,
  isAVlogCard,
  slidesPerView,
  breakpoints,
}: {
  title: string;
  cardsData: CardsDataType;
  sectionClassName?: string;
  imagesClassName?: string;
  spaceBetween?: number;
  // children?: React.ReactNode;
  addAfterHeading?: boolean;
  isAVlogCard?: boolean;
  slidesPerView?: number;
  breakpoints?: {
    [width: number]: SwiperOptions;
    [ratio: string]: SwiperOptions;
  };
}) {
  return (
    <section className={sectionClassName}>
      <h2 className="font-poppins container text-[30px] leading-[44px] font-semibold text-black">
        {title}
      </h2>
      <div className="mt-6">
        <ImageSlider
          cardsData={cardsData}
          imagesClassName={imagesClassName}
          spaceBetween={spaceBetween}
          // children={children}
          addAfterHeading={addAfterHeading}
          isAVlogCard={isAVlogCard}
          slidesPerView={slidesPerView}
          breakpoints={breakpoints}
        />
      </div>
    </section>
  );
}

export default SliderSection;
