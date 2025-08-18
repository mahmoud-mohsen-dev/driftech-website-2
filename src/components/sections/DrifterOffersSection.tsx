import DrifterOfferCard from "../UI/cards/DrifferOfferCard";

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
        <div className="mt-[36px] flex w-full gap-8">
          <DrifterOfferCard
            title="Show Drifter"
            description="Building world-class IT teams with exceptional Egyptian talent."
            linkHref="#"
            key={"drifter-1"}
          />
          <DrifterOfferCard
            title="Show Drifter"
            description="Building world-class IT teams with exceptional Egyptian talent."
            linkHref="#"
            key={"drifter-1"}
          />
          <DrifterOfferCard
            title="Show Drifter"
            description="Building world-class IT teams with exceptional Egyptian talent."
            linkHref="#"
            key={"drifter-1"}
          />
          <DrifterOfferCard
            title="Show Drifter"
            description="Building world-class IT teams with exceptional Egyptian talent."
            linkHref="#"
            key={"drifter-1"}
          />
        </div>
      </div>
    </section>
  );
}

export default DrifterOffersSection;
