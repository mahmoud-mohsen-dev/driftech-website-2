import Btn from "../buttons/Btn";

function RelatedVlogCard({
  imgSrc,
  imgAlt,
}: {
  imgSrc: string;
  imgAlt: string;
}) {
  const handleWatchNow = () => {};
  const handleShare = () => {};

  return (
    <div className="font-poppins flex h-[448px] w-full flex-col items-center justify-center md:h-[224px] md:flex-row">
      <div className="relative h-1/2 w-full overflow-clip rounded-[0.941875rem] md:h-full md:w-1/2">
        <img
          src={imgSrc}
          alt={imgAlt}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 h-full w-full bg-black opacity-40" />

        <div className="absolute inset-0 z-10 flex h-[calc(100%-32px)] items-center justify-center md:h-full md:w-[calc(100%-32px)]">
          <img
            src="/icons/play-video.svg"
            alt="play video"
            width={49.3}
            height={49.3}
          />
        </div>
      </div>
      <div className="bg-neutral-0 shadow-black-medium relative -top-8 z-20 flex h-1/2 flex-col items-stretch justify-center gap-[1.4375rem] rounded-[0.941875rem] px-[1.4375rem] py-5 md:top-0 md:-left-8 md:h-full md:w-1/2 md:min-w-[337px]">
        <h4 className="leading-normal font-semibold text-black">
          BMW X3 - 2021
        </h4>
        <p className="text-foundation-gray-darkest text-[clamp(0.75rem,0.5vw+0.625rem,0.875rem)] leading-normal font-medium">
          The Toyota Corolla 2024 combines reliability with modern design.
          Equipped with a fuel-efficient engine,{" "}
        </p>

        <div className="flex items-center justify-between gap-[11.27px]">
          <Btn
            handleClick={handleWatchNow}
            width="w-full"
            height="h-[2.8125rem]"
          >
            Watch Now
          </Btn>
          <Btn
            handleClick={handleShare}
            variant="outline-for-bg-light"
            width="w-[52.74px]"
            height="h-[2.8125rem]"
          >
            <img src="/icons/send.svg" alt="send icon" />
          </Btn>
        </div>
      </div>
    </div>
  );
}

export default RelatedVlogCard;
