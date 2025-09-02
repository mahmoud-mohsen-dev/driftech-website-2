function DownloadApp({
  image: { src = "", alt = "" },
  heading,
  description,
  gapBtween = "gap-x-[8px] gap-y-[3.34px]",
  className = "",
  size = "small",
  applyLargeSizeOnSmallScreens = false,
}: {
  image: { src: string; alt: string };
  heading: string;
  description: string;
  gapBtween?: string;
  className?: string;
  size?: "small" | "large";
  applyLargeSizeOnSmallScreens?: boolean;
}) {
  const isLarge = size === "large";

  return (
    <button
      className={`bg-foundation-brown-normal flex items-center justify-center px-[7.63px] py-[9.36px] ${
        isLarge
          ? "h-[58px] w-[170px] gap-x-[11.41px] rounded-[9.13px]"
          : applyLargeSizeOnSmallScreens
            ? `h-[58px] w-[170px] gap-x-[11.41px] rounded-[9.13px] lg:h-fit lg:w-[124px] lg:rounded-[6.1px] ${gapBtween} `
            : `${gapBtween} rounded-[6.1px]`
      } ${className}`}
    >
      <img
        src={src}
        alt={alt}
        width={isLarge ? 30 : 20}
        height={isLarge ? 30 : 20}
        className={`${isLarge ? "h-[30px] w-[30px]" : applyLargeSizeOnSmallScreens ? "h-[30px] w-[30px] lg:h-[20px] lg:w-[20px]" : "h-[20px] w-[20px]"}`}
      />
      <div className="flex flex-col items-start">
        <p
          className={`font-dm-sans text-neutral-0 font-normal capitalize ${
            isLarge
              ? "mb-[5px] text-[12px] leading-[12px]"
              : applyLargeSizeOnSmallScreens
                ? "mb-[5px] text-[12px] leading-[12px] lg:mb-[4.34px] lg:text-[8.03px] lg:leading-2"
                : "mb-[4.34px] text-[8.03px] leading-2"
          }`}
        >
          {heading}
        </p>
        <p
          className={`font-dm-sans text-neutral-0 font-bold capitalize ${
            isLarge
              ? "text-[14px] leading-[12px]"
              : applyLargeSizeOnSmallScreens
                ? "text-[14px] leading-[12px] lg:text-[9.36px] lg:leading-2"
                : "text-[9.36px] leading-2"
          }`}
        >
          {description}
        </p>
      </div>
    </button>
  );
}

export default DownloadApp;
