function DownloadApp({
  image: { src = "", alt = "" },
  heading,
  description,
  gapBtween = "gap-x-[8px] gap-y-[3.34px]",
  className = "",
  size = "small",
}: {
  image: { src: string; alt: string };
  heading: string;
  description: string;
  gapBtween?: string;
  className?: string;
  size?: "small" | "large";
}) {
  const isLarge = size === "large";

  return (
    <button
      className={`bg-foundation-brown-normal flex items-center justify-center px-[7.63px] py-[9.36px] ${
        isLarge
          ? "h-[58px] w-[170px] gap-x-[11.41px] rounded-[9.13px]"
          : `${gapBtween} rounded-[6.1px]`
      } ${className}`}
    >
      <img
        src={src}
        alt={alt}
        width={isLarge ? 30 : 20}
        height={isLarge ? 30 : 20}
      />
      <div className="flex flex-col items-start">
        <p
          className={`font-dm-sans text-neutral-0 font-normal capitalize ${
            isLarge
              ? "mb-[5px] text-[12px] leading-[12px]"
              : "mb-[4.34px] text-[8.03px] leading-2"
          }`}
        >
          {heading}
        </p>
        <p
          className={`font-dm-sans text-neutral-0 font-bold capitalize ${
            isLarge ? "text-[14px] leading-[12px]" : "text-[9.36px] leading-2"
          }`}
        >
          {description}
        </p>
      </div>
    </button>
  );
}

export default DownloadApp;
