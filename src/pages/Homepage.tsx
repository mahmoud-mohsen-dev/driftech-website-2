import Footer from "../components/sections/Footer";
import HeroSection from "../components/sections/HeroSection";
import Header from "../components/sections/Header";
import CalculateLoanSection from "../components/sections/CalculateLoanSection";
import DrifterOffersSection from "../components/sections/DrifterOffersSection";
import TrustedPartnersSection from "../components/sections/TrustedPartnersSection";
import AutoLoanCalculatorSection from "../components/sections/AutoLoanCalculatorSection";

import ContactUsSection from "../components/sections/ContactUsSection";
import CarsByDownPaymentsSection from "../components/sections/carsByDownPaymentsSection";
import VehicleFinancingSection from "../components/sections/VehicleFinancingSection";
import DriftechVlogs from "../components/sections/DriftechVlogs";

function Homepage() {
  return (
    <div className="">
      <Header />
      <main>
        <HeroSection />
        <CalculateLoanSection />
        <DrifterOffersSection />
        <TrustedPartnersSection />
        <AutoLoanCalculatorSection />

        <CarsByDownPaymentsSection />
        {/* App Addvertisement section*/}
        {/* purchase totuorial section */}

        <VehicleFinancingSection />
        <DriftechVlogs />
        <ContactUsSection />
      </main>
      <Footer />
    </div>
  );
}

export default Homepage;
