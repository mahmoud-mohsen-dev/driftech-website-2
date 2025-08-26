import Header from "../components/homeSections/Header";
import HeroSection from "../components/homeSections/HeroSection";
import Footer from "../components/homeSections/Footer";
import CalculateLoanSection from "../components/homeSections/CalculateLoanSection";
import DrifterOffersSection from "../components/homeSections/DrifterOffersSection";
import TrustedPartnersSection from "../components/homeSections/TrustedPartnersSection";
import AutoLoanCalculatorSection from "../components/homeSections/AutoLoanCalculatorSection";

import ContactUsSection from "../components/homeSections/ContactUsSection";
import VehicleFinancingSection from "../components/homeSections/VehicleFinancingSection";
import DriftechVlogs from "../components/homeSections/DriftechVlogs";
import CarsByDownPaymentsSection from "../components/homeSections/CarsByDownPaymentsSection";
import AppAdvertisementSection from "../components/homeSections/AppAdvertisementSection";
import PurchaseTutorialSection from "../components/homeSections/PurchaseTutorialSection";

function Home() {
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

export default Home;
