import Footer from "../components/sections/Footer";
import HeroSection from "../components/sections/HeroSection";
import Header from "../components/sections/Header";
import CalculateLoanSection from "../components/sections/CalculateLoanSection";
import DrifterOffersSection from "../components/sections/DrifterOffersSection";
import TrustedPartnersSection from "../components/sections/TrustedPartnersSection";

function Homepage() {
  return (
    <div className="">
      <Header />
      <main>
        <HeroSection />
        <CalculateLoanSection />
        <DrifterOffersSection />
        <TrustedPartnersSection />
      </main>
      <Footer />
    </div>
  );
}

export default Homepage;
