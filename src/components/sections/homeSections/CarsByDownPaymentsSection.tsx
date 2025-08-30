import FilterRadioGroup from "../../UI/forms/FilterRadioGroup";
import ImageSliderForCards from "../../slider/ImageSliderForCards";
import CarDownPaymentCard from "../../UI/cards/CarDownPaymentCard";

function CarsByDownPaymentsSection() {
  return (
    <section className="font-poppins pt-20">
      <div className="container">
        <div className="mb-[0.9375rem] flex items-center justify-between">
          <h1 className="text-black-medium text-[1.875rem] leading-[2.8125rem] font-semibold">
            Cars by down payments
          </h1>

          <a
            href={"#"}
            className="flex items-center gap-[0.6875rem] hover:underline"
          >
            <span className="text-black-medium text-[1.25rem] leading-[1.875rem] font-medium">
              All Cars
            </span>
            <img
              src="/icons/weui_arrow-outlined.svg"
              alt="weui arrow outlined icon"
              width={16}
              height={32}
            />
          </a>
        </div>

        <FilterRadioGroup />
      </div>

      <div className="mt-[2.625rem]">
        <ImageSliderForCards
          cards={[
            <CarDownPaymentCard />,
            <CarDownPaymentCard />,
            <CarDownPaymentCard />,
            <CarDownPaymentCard />,
            <CarDownPaymentCard />,
            <CarDownPaymentCard />,
            <CarDownPaymentCard />,
            <CarDownPaymentCard />,
          ]}
        />
      </div>
    </section>
  );
}

export default CarsByDownPaymentsSection;
