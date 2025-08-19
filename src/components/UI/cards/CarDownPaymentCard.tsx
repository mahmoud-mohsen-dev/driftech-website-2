import Btn from "../buttons/Btn";

function CarDownPaymentCard() {
  const handleFavorite = () => {};
  const handleViewDetails = () => {};
  const handleSend = () => {};

  return (
    <div className="font-poppins relative">
      <img src="/icons/modern-car.svg" alt="modern car" />
      {/*Card Header */}
      <div className="absolute top-[24.72px] left-1/2 flex w-[330px] -translate-x-[50%] items-center justify-between">
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
          >
            <img src="/icons/send.svg" alt="send icon" />
          </Btn>
        </div>
      </div>
    </div>
  );
}

export default CarDownPaymentCard;
