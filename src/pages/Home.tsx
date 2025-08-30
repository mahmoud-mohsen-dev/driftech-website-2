import Header from "../components/sections/Header";
import HeroSection from "../components/sections/homeSections/HeroSection";
import Footer from "../components/sections/Footer";
import CalculateLoanSection from "../components/sections/homeSections/CalculateLoanSection";
import DrifterOffersSection from "../components/sections/homeSections/DrifterOffersSection";
import TrustedPartnersSection from "../components/sections/homeSections/TrustedPartnersSection";
import AutoLoanCalculatorSection from "../components/sections/homeSections/AutoLoanCalculatorSection";

import ContactUsSection from "../components/sections/homeSections/ContactUsSection";
import VehicleFinancingSection from "../components/sections/homeSections/VehicleFinancingSection";
import DriftechVlogs from "../components/sections/homeSections/DriftechVlogs";
import CarsByDownPaymentsSection from "../components/sections/homeSections/CarsByDownPaymentsSection";
import AppAdvertisementSection from "../components/sections/homeSections/AppAdvertisementSection";
import PurchaseTutorialSection from "../components/sections/homeSections/PurchaseTutorialSection";

function Home() {
  return (
    <>
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
    </>
  );
}

export default Home;
