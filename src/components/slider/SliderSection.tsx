import ImageSlider from "./ImageSlider";

function SliderSection({
  title,
  images,
  sectionClassName = "py-[80px]",
  imagesClassName = "h-[367px] w-full rounded-lg",
  spaceBetween,
  children,
  addAfterHeading,
}: {
  title: string;
  images: {
    src: string;
    alt: string;
  }[];
  sectionClassName?: string;
  imagesClassName?: string;
  spaceBetween?: number;
  children?: React.ReactNode;
  addAfterHeading?: boolean;
}) {
  return (
    <section className={sectionClassName}>
      <h2 className="font-poppins container text-[30px] leading-[44px] font-semibold text-black">
        {title}
      </h2>
      <div className="mt-6">
        <ImageSlider
          images={images}
          imagesClassName={imagesClassName}
          spaceBetween={spaceBetween}
          children={children}
          addAfterHeading={addAfterHeading}
        />
      </div>
    </section>
  );
}

export default SliderSection;
