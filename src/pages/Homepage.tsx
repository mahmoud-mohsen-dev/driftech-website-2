import Header from "../components/sections/Header";
import HeroSection from "../components/sections/HeroSection";
import Footer from "../components/sections/Footer";
import CalculateLoanSection from "../components/sections/CalculateLoanSection";
import DrifterOffersSection from "../components/sections/DrifterOffersSection";
import TrustedPartnersSection from "../components/sections/TrustedPartnersSection";
import AutoLoanCalculatorSection from "../components/sections/AutoLoanCalculatorSection";

import ContactUsSection from "../components/sections/ContactUsSection";
import VehicleFinancingSection from "../components/sections/VehicleFinancingSection";
import DriftechVlogs from "../components/sections/DriftechVlogs";
import CarsByDownPaymentsSection from "../components/sections/CarsByDownPaymentsSection";
import AppAdvertisementSection from "../components/sections/AppAdvertisementSection";
import PurchaseTutorialSection from "../components/sections/PurchaseTutorialSection";

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
        <AppAdvertisementSection />
        <PurchaseTutorialSection />

        <VehicleFinancingSection />
        <DriftechVlogs />
        <ContactUsSection />
      </main>
      <Footer />
    </div>
  );
}

export default Homepage;
