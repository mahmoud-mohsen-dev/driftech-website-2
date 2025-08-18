function DownloadApp({
  image: { src = "", alt = "" },
  heading,
  description,
  gapBtween = "gap-x-[8px] gap-y-[3.34px]",
  className = "",
}: {
  image: { src: string; alt: string };
  heading: string;
  description: string;
  gapBtween?: string;
  className?: string;
}) {
  return (
    <button
      className={`bg-foundation-brown-normal flex items-center justify-center rounded-[6.1px] px-[7.63px] py-[9.36px] ${gapBtween} ${className}`}
    >
      <img src={src} alt={alt} width={20} height={20} />
      <div className="flex flex-col items-start">
        <p className="font-dm-sans text-neutral-0 mb-[4.34px] !text-[8.03px] leading-2 font-normal capitalize">
          {heading}
        </p>
        <p className="font-dm-sans text-neutral-0 !text-[9.36px] leading-2 font-bold capitalize">
          {description}
        </p>
      </div>
    </button>
  );
}

export default DownloadApp;
