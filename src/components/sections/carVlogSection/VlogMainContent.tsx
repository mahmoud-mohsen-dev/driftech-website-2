import vlogHeaderImage from "../../../assets/sections/black-mini-coupe-road-big.jpg";
import Btn from "../../UI/buttons/Btn";

function VlogMainContent() {
  const handleShare = () => {};
  return (
    <section className="font-poppins mt-[70px] mb-20 xl:mx-[6.5625rem]">
      {/* Vlog Image Header */}
      <div className="relative">
        <img
          src={vlogHeaderImage}
          alt="black mini coupe road"
          className="w-full object-cover object-center xl:max-h-[36.9375rem]"
        />
        <div className="absolute inset-0 h-full w-full bg-black opacity-40" />

        <div className="absolute inset-0 z-10 flex h-full w-full items-center justify-center">
          <img
            src="/icons/play-video.svg"
            alt="play video"
            width={102.61}
            height={102.61}
          />
        </div>

        <div className="absolute right-[2.25rem] bottom-[2.25rem] z-10">
          <p className="text-foundation-gray-light bg-gray-normal-opacity-80 flex min-h-[42px] min-w-[114px] items-center justify-center rounded-full px-4 py-1 text-[clamp(1.125rem,0.5vw+1rem,1.25rem)] leading-[1.5]">
            01:24
          </p>
        </div>
      </div>

      <div className="my-[1.941875rem] flex items-center justify-between">
        <h1 className="text-foundation-gray-darker text-[clamp(1.5rem,1.3571rem+0.7143vw,2rem)] leading-normal font-medium">
          2025 Audi Review
        </h1>
        <Btn
          handleClick={handleShare}
          variant="outline-for-bg-light"
          width="w-[62.67px]"
          height="h-[52px]"
          className="group rounded-[9.47px] p-3 font-[inherit] leading-[17.8px] font-medium capitalize"
        >
          {/* <img src="/icons/send.svg" alt="send icon" /> */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#E73201] transition-colors duration-100 group-hover:text-white"
          >
            <path
              d="M8.43322 7.89403L18.0056 4.70323C22.3014 3.27132 24.6353 5.6165 23.2146 9.91224L20.0238 19.4846C17.8816 25.9226 14.3638 25.9226 12.2216 19.4846L11.2745 16.6434L8.43322 15.6963C1.99524 13.554 1.99524 10.0475 8.43322 7.89403Z"
              stroke="currentColor"
              strokeWidth="1.69124"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.489 16.159L15.5254 12.1113"
              stroke="currentColor"
              strokeWidth="1.69124"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Btn>
      </div>

      <div>
        <p className="text-foundation-gray-darkest text-[clamp(1.25rem,1vw+1rem,1.5rem)] leading-normal font-normal">
          The Toyota Corolla 2024 combines reliability with modern design.
          Equipped with a fuel-efficient engine, advanced safety features, and a
          comfortable interior, it’s designed to deliver a smooth driving
          experience for both city commutes and long journeys. With its sleek
          exterior and smart technology inside, the Corolla remains one of the
          most trusted cars worldwide."
        </p>
      </div>
    </section>
  );
}

export default VlogMainContent;
