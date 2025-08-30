import Anchor from "../../UI/buttons/Anchor";
import DrifterOfferCard from "../../UI/cards/DrifferOfferCard";

function DrifterOffersSection() {
  return (
    <section className="text-foundation-gray-lighter py-[36px]">
      <div className="container">
        <div className="mx-auto max-w-[858px] text-center">
          <h2 className="text-foundation-brown-darker text-[30px] leading-[36px] font-bold">
            Which Drifter are you?
          </h2>
          <p className="text-foundation-gray-normal-hover mt-[14px] text-[18px] leading-[26px] font-normal">
            Discover the diverse world of drifting culture. From street legends
            to professional champions, each type brings their own style, skill,
            and passion to the art of controlled chaos.
          </p>
        </div>
        <div className="mt-[36px] grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <DrifterOfferCard
            title="Drift Now"
            description="Get your car instantly with flexible payment options."
            // linkHref="#"
            key={"drifter-1"}
          />
          <DrifterOfferCard
            title="Drift Trade"
            description="Easily trade in your old car for a new one."
            // linkHref="#"
            key={"drifter-2"}
          />
          <DrifterOfferCard
            title="Fleet Drift"
            description="Smart solutions for businesses and car fleets."
            // linkHref="#"
            key={"drifter-3"}
          />
          <DrifterOfferCard
            title="Drift & Save"
            description="Save more with our exclusive offers and deals."
            // linkHref="#"
            key={"drifter-4"}
          />
        </div>
        <div className="mt-9 flex items-center justify-center">
          <Anchor href="#" className="rounded-lg">
            View More
          </Anchor>
        </div>
      </div>
    </section>
  );
}

export default DrifterOffersSection;
