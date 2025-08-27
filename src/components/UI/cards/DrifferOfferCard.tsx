// import UnderLineWithArrowRightAnchor from "../buttons/UnderLineWithArrowRightAnchor";

function DrifterOfferCard({
  title,
  description,
  // linkHref = "#",
}: {
  title: string;
  description: string;
  // linkHref?: string;
}) {
  return (
    <div className="shadow-drifter-card flex grow basis-0 flex-col items-start gap-[28px] rounded-[14.95px] px-4 py-9">
      <img src="/icons/star.svg" alt="star" />
      <div className="space-y-2.5">
        <h3 className="font-poppins text-foundation-brown-normal text-[22px] leading-[150%] font-semibold">
          {title}
        </h3>
        <p className="font-poppins text-foundation-gray-normal text-[14px] leading-[150%] font-medium">
          {description}
        </p>
      </div>

      {/* <UnderLineWithArrowRightAnchor
        href={linkHref}
        image={{ src: "/icons/arrow-right.svg", alt: "arrow right" }}
      >
        Learn More
      </UnderLineWithArrowRightAnchor> */}
    </div>
  );
}

export default DrifterOfferCard;
