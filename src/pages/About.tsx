import AboutHeroSection from "../components/sections/aboutSections/AboutHeroSection";
import AboutMissionSection from "../components/sections/aboutSections/AboutMissionSection";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";
import NavigateToContactUsSection from "../components/sections/NavigateToContactUsSection";
// import HeroSection from "../components/sections/homeSections/HeroSection";

function About() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* <HeroSection /> */}
        <AboutHeroSection />
        <AboutMissionSection />
        <NavigateToContactUsSection />
      </main>
      <Footer />
    </>
  );
}

export default About;
