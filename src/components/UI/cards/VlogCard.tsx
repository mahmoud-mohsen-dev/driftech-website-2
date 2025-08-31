import { Link } from "react-router";

function VlogCard({
  className = "",
  imgSrc,
  imgAlt,
  title,
  time,
  slug,
}: {
  className?: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  time: string;
  slug: string;
}) {
  return (
    <Link to={`/cars-vlogs/${slug}`}>
      <div className={`relative ${className}`}>
        <img
          src={imgSrc}
          alt={imgAlt}
          className="z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 z-10 h-full w-full bg-[rgba(0,0,0,0.4)]"></div>
        <div className="absolute top-0 left-0 z-30 flex h-full w-full flex-col items-center justify-center">
          <img
            src="/icons/play-video.svg"
            alt="play video icon"
            width={52}
            height={52}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          />
          <div className="absolute bottom-[14px] left-1/2 flex w-[347px] -translate-x-1/2 items-center justify-between px-2">
            <span className="font-poppins text-neutral-0 text-[22px] leading-[33px] font-medium">
              {title}
            </span>
            <span className="bg-gray-normal-opacity-80 font-poppins text-neutral-0 flex h-[24px] w-[65px] items-center justify-center rounded-full px-2.5 text-xs leading-[18px] font-normal">
              {time}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default VlogCard;
