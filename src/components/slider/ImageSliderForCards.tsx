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
        slidesPerView={1.2}
        breakpoints={{
          440: {
            slidesPerView: 1.5,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
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
          <SwiperSlide
            key={index}
            className="cursor-grab active:cursor-grabbing"
          >
            {card}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
