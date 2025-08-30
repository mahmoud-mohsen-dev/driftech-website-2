import bgImg from "../../../assets/backgrounds/metting-on-table-1.jpg";
import HeroSectionWithLinearOrangeOverlay from "../HeroSectionWithLinearOrangeOverlay";

function AboutHeroSection() {
  return (
    <HeroSectionWithLinearOrangeOverlay
      imgSrc={bgImg}
      title="Who We Are ?"
      description="We’re more than just a car platform . we connect drivers with the best deals, trusted reviews, and a seamless car experience."
    />
  );
}

export default AboutHeroSection;
