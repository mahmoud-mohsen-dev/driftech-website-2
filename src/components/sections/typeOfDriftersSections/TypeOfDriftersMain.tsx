import DirfterTypeSection from "./DirfterTypeSection";
import dirfterTypeImg1 from "../../../assets/sections/types of drifters/drifter-type-1.png";
import dirfterTypeImg2 from "../../../assets/sections/types of drifters/drifter-type-2.png";
import dirfterTypeImg3 from "../../../assets/sections/types of drifters/drifter-type-3.png";
import dirfterTypeImg4 from "../../../assets/sections/types of drifters/drifter-type-4.png";
import { v4 } from "uuid";
function TypeOfDriftersMain() {
  return (
    <div className="mt-20 space-y-[5.25rem]">
      <DirfterTypeSection
        key={v4()}
        imgPosition="right"
        imgSrc={dirfterTypeImg1}
        imgAlt="drifter type 1 image"
        heading=" Instant approvals for those who are ready to drive. "
        subHeading="Calculate your monthly car payment instantly. Get accurate estimates
            to help you budget for your dream vehicle."
        listHeading="Choose this program if:"
        listItems={[
          "You 're ready to move fast and want to complete the process within 48 hours",
          "You 're ready to move fast and want to complete the process within 48 hours",
          "You 're ready to move fast and want to complete the process within 48 hours",
          "You 're ready to move fast and want to complete the process within 48 hours",
        ]}
        linkText="View Details"
        linkUrl="/"
      />
      <DirfterTypeSection
        key={v4()}
        imgPosition="left"
        imgSrc={dirfterTypeImg2}
        imgAlt="drifter type 2 image"
        heading=" Instant approvals for those who are ready to drive. "
        subHeading="Calculate your monthly car payment instantly. Get accurate estimates
            to help you budget for your dream vehicle."
        listHeading="Choose this program if:"
        listItems={[
          "You 're ready to move fast and want to complete the process within 48 hours",
          "You 're ready to move fast and want to complete the process within 48 hours",
          "You 're ready to move fast and want to complete the process within 48 hours",
          "You 're ready to move fast and want to complete the process within 48 hours",
        ]}
        linkText="View Details"
        linkUrl="/"
      />
      <DirfterTypeSection
        key={v4()}
        imgPosition="right"
        imgSrc={dirfterTypeImg3}
        imgAlt="drifter type 3 image"
        heading=" Instant approvals for those who are ready to drive. "
        subHeading="Calculate your monthly car payment instantly. Get accurate estimates
            to help you budget for your dream vehicle."
        listHeading="Choose this program if:"
        listItems={[
          "You 're ready to move fast and want to complete the process within 48 hours",
          "You 're ready to move fast and want to complete the process within 48 hours",
          "You 're ready to move fast and want to complete the process within 48 hours",
          "You 're ready to move fast and want to complete the process within 48 hours",
        ]}
        linkText="View Details"
        linkUrl="/"
      />
      <DirfterTypeSection
        key={v4()}
        imgPosition="left"
        imgSrc={dirfterTypeImg4}
        imgAlt="drifter type 4 image"
        heading=" Instant approvals for those who are ready to drive. "
        subHeading="Calculate your monthly car payment instantly. Get accurate estimates
            to help you budget for your dream vehicle."
        listHeading="Choose this program if:"
        listItems={[
          "You 're ready to move fast and want to complete the process within 48 hours",
          "You 're ready to move fast and want to complete the process within 48 hours",
          "You 're ready to move fast and want to complete the process within 48 hours",
          "You 're ready to move fast and want to complete the process within 48 hours",
        ]}
        linkText="View Details"
        linkUrl="/"
      />
    </div>
  );
}

export default TypeOfDriftersMain;
