// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

export default function ImageSliderForCards({
  cards,
  spaceBetween = 33,
}: {
  cards: React.JSX.Element[];
  spaceBetween?: number;
}) {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={spaceBetween}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="slider-cards"
        style={{ paddingBottom: "42px" }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>{card}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
