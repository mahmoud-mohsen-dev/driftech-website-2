import Btn from "../buttons/Btn";

function CarDownPaymentCard() {
  const handleFavorite = () => {};
  const handleViewDetails = () => {};
  const handleSend = () => {};

  return (
    <div className="font-poppins relative">
      <img src="/icons/modern-car.svg" alt="modern car" />
      {/*Card Header */}
      <div className="absolute top-[24.72px] left-1/2 flex w-full -translate-x-[50%] items-center justify-between px-4 md:px-6">
        <Btn
          handleClick={handleFavorite}
          className="font-poppins rounded-[9.02px] p-[9.02px] text-[18.04px] leading-[27px] font-semibold capitalize"
          width="w-[101.47px]"
          height="h-[33.82px]"
        >
          New
        </Btn>
        <button className="bg-gray-medium-opacity-42 flex h-[51px] w-[51px] items-center justify-center rounded-full p-[7.4px]">
          <img
            src="/icons/heart.svg"
            alt="heart icon"
            width={29.6}
            height={29.6}
          />
        </button>
      </div>

      {/* Card Footer */}

      <div className="bg-neutral-0 relative -top-[34px] flex flex-col gap-5 rounded-[13.53px] px-[11.27px] py-[18.04px] shadow-black">
        <div className="flex items-center justify-between">
          <h3 className="text-[20.29px] leading-[30px] font-semibold text-black">
            Toyta-2022
          </h3>
          <h4 className="text-foundation-orange-normal text-[18.04px] leading-[27px] font-bold">
            EGP 500,000
          </h4>
        </div>

        <div className="space-x-[9.32px]">
          <span className="text-foundation-brown-normal p-[7.05px] text-[11.27px] leading-[17px] font-medium">
            1st Catehory
          </span>
          <span className="text-foundation-brown-normal p-[7.05px] text-[11.27px] leading-[17px] font-medium">
            Automatic
          </span>
          <span className="text-foundation-brown-normal p-[7.05px] text-[11.27px] leading-[17px] font-medium">
            55,500 KM
          </span>
        </div>

        <div className="flex items-center justify-between gap-[11.27px]">
          <Btn
            handleClick={handleViewDetails}
            width="w-full"
            height="h-[54.12px]"
          >
            View Details
          </Btn>
          <Btn
            handleClick={handleSend}
            variant="outline-for-bg-light"
            width="w-[47.35px]"
            height="h-[54.12px]"
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
      </div>
    </div>
  );
}

export default CarDownPaymentCard;
