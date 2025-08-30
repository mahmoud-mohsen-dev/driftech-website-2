import type { CardsDataType } from "../../../types/cardsSliderTypes";
import SliderSection from "../../slider/SliderSection";

function DriftechVlogsCardsSection({
  cardsData,
  isAVlogCard = false,
  slidesPerView,
}: {
  cardsData: CardsDataType;
  isAVlogCard?: boolean;
  slidesPerView?: number;
}) {
  return (
    <SliderSection
      title="Driftech Vlogs"
      cardsData={cardsData}
      sectionClassName=""
      imagesClassName="h-[519px] relative"
      spaceBetween={41}
      isAVlogCard={isAVlogCard}
      slidesPerView={slidesPerView}
    />
  );
}

export default DriftechVlogsCardsSection;
