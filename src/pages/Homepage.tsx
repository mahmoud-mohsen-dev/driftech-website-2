import Footer from "../components/sections/Footer";
import HeroSection from "../components/sections/HeroSection";
import Header from "../components/sections/Header";
import CalculateLoanSection from "../components/sections/CalculateLoanSection";
import DrifterOffersSection from "../components/sections/DrifterOffersSection";

function Homepage() {
  return (
    <div className="">
      <Header />
      <main>
        <HeroSection />
        <CalculateLoanSection />
        <DrifterOffersSection />
      </main>
      <Footer />
    </div>
  );
}

export default Homepage;
