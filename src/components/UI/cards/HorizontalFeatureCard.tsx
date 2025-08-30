function HorizontalFeatureCard({
  heading,
  description,
  image: { src, alt },
}: {
  heading: string;
  description: string;
  image: { src: string; alt: string };
}) {
  return (
    <div className="font-poppins hover:bg-foundation-gray-light text-shadow-light-gray flex flex-col-reverse items-center gap-5 rounded-[16.09px] px-[22.11px] py-[16.09px] transition-colors duration-300 ease-out lg:flex-row lg:gap-[54.36px]">
      <div>
        <h4 className="text-black-medium border-foundation-orange-normal rounded-[1.84px] border-l-[4px] pl-[10.73px] text-xl leading-[30px]">
          {heading}
        </h4>
        <p className="text-gray-medium-800 mt-[9.21px] text-[12px] leading-[18px] font-normal text-pretty">
          {description}
        </p>
      </div>

      <img src={src} alt={alt} className="w-fit" />
    </div>
  );
}

export default HorizontalFeatureCard;
