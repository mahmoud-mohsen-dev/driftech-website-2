// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

export default function ImageSlider({
  images,
  imagesClassName,
  spaceBetween = 33,
  children,
  addAfterHeading = false,
}: {
  images: { src: string; alt: string }[];
  imagesClassName: string;
  spaceBetween?: number;
  children?: React.ReactNode;
  addAfterHeading?: boolean;
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
        className="mySwiper"
        style={{ paddingBottom: "50px" }}
      >
        {images.map((image, index) => (
          <SwiperSlide>
            <div className={`cursor-grab overflow-hidden ${imagesClassName}`}>
              <img
                src={image.src}
                alt={image.alt}
                key={index}
                className="h-full w-full object-cover"
              />
              {children}
            </div>
            {addAfterHeading && (
              <h2 className="font-poppins mt-5 text-[30px] leading-[44px] font-medium text-black">
                Car Finance
              </h2>
            )}
            {/* </div> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
