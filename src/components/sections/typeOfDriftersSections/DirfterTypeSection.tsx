import { v4 } from "uuid";
// import Anchor from "../../UI/buttons/Anchor";
import Btn from "../../UI/buttons/Btn";

function DrifterTypeListItem({ listItemText }: { listItemText: string }) {
  return (
    <li className="flex items-center gap-2">
      <img
        src="/icons/check-mark.svg"
        alt="check mark icon"
        width={32}
        height={32}
      />
      <p className="text-foundation-gray-normal-active font-medium">
        {listItemText}
      </p>
    </li>
  );
}

function DirfterTypeSection({
  imgPosition,
  imgSrc,
  imgAlt,
  heading,
  subHeading,
  listHeading,
  listItems,
  linkText,
  linkUrl,
}: {
  imgPosition: "left" | "right";
  imgSrc: string;
  imgAlt: string;
  heading: string;
  subHeading: string;
  listHeading: string;
  listItems: string[];
  linkText: string;
  linkUrl: string;
}) {
  return (
    <div
      className={`font-inter flex flex-col items-center justify-between gap-[2.1875rem] ${imgPosition === "right" ? "lg:flex-row-reverse" : "lg:flex-row"}`}
    >
      <div
        className={`flex basis-1/2 items-center ${imgPosition === "right" ? "justify-end" : "justify-start"}`}
      >
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div className="basis-1/2 space-y-[28px]">
        <div className="space-y-5">
          <h2 className="text-foundation-brown-darker text-[clamp(1.5rem,1.3929rem+0.5357vw,1.875rem)] leading-none font-semibold">
            {/* Instant approvals for those who are ready to drive. */}
            {heading}
          </h2>
          <h4 className="text-foundation-gray-normal-active leading-[1.6] font-normal">
            {/* Calculate your monthly car payment instantly. Get accurate estimates
            to help you budget for your dream vehicle. */}
            {subHeading}
          </h4>
        </div>
        <h4 className="text-foundation-gray-normal-active leading-[1.6] font-normal">
          {/* Choose this program if: */}
          {listHeading}
        </h4>
        <ul className="space-y-4 lg:space-y-6">
          {/* <DrifterTypeListItem
            listItemText="You 're ready to move fast and want to complete the process within 48 hours"
            key={v4()}
          /> */}
          {listItems.map((itemText) => (
            <DrifterTypeListItem listItemText={itemText} key={v4()} />
          ))}
        </ul>

        <Btn
          to={linkUrl}
          width="w-full lg:w-[200px]"
          height="h-[53px]"
          className="font-inter mx-auto rounded-[0.53625rem] text-[clamp(1rem,0.9643rem+0.1786vw,1.125rem)] leading-0 lg:mx-0"
        >
          {/* View Details */}
          {linkText}
        </Btn>
      </div>
    </div>
  );
}

export default DirfterTypeSection;
