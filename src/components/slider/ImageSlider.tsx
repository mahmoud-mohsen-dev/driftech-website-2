// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import type { CardsDataType } from "../../types/cardsSliderTypes";
import type { SwiperOptions } from "swiper/types";
import { Link } from "react-router";

export default function ImageSlider({
  cardsData,
  imagesClassName,
  spaceBetween = 33,
  // children,
  addAfterHeading = false,
  isAVlogCard = false,
  slidesPerView = 4,
  breakpoints,
}: {
  cardsData: CardsDataType;
  imagesClassName: string;
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
    <>
      <Swiper
        slidesPerView={slidesPerView}
        breakpoints={breakpoints}
        spaceBetween={spaceBetween}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        style={{ paddingBottom: "50px" }}
      >
        {cardsData.map((card, index) => (
          <SwiperSlide>
            <Link to={card?.slug ?? "/"}>
              <div
                className={`cursor-pointer overflow-hidden ${imagesClassName}`}
              >
                <img
                  src={card.imgSrc}
                  alt={card.imgAlt}
                  key={index}
                  className="h-full w-full object-cover"
                />
                {isAVlogCard && (
                  <div className="absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center">
                    <img
                      src="/icons/play-video.svg"
                      alt="play video icon"
                      width={52}
                      height={52}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    />
                    <div className="absolute bottom-[14px] left-1/2 flex w-full -translate-x-1/2 items-center justify-between px-4">
                      <span className="font-poppins text-neutral-0 text-[22px] leading-[33px] font-medium">
                        {card.title}
                      </span>
                      <span className="bg-gray-normal-opacity-80 font-poppins text-neutral-0 flex h-[24px] w-[65px] items-center justify-center rounded-full px-2.5 text-xs leading-[18px] font-normal">
                        {card.time}
                      </span>
                    </div>
                  </div>
                )}
              </div>
              {addAfterHeading && (
                <h2 className="font-poppins mt-5 text-[30px] leading-[44px] font-medium text-black">
                  Car Finance
                </h2>
              )}
            </Link>
            {/* </div> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
