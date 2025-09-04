import { Link } from "react-router";
import AppBreadCrumb from "../components/UI/AppBreadCrumb";
import PaymentCalculatorSection from "../components/sections/financeSections/PaymentCalculatorSection";
import FinanceLayout from "../layouts/FinanceLayout";
import PersonalInfoSection from "../components/sections/financeSections/PersonalInfoSection";
import { useState } from "react";
import WorkDetailsSection from "../components/sections/financeSections/WorkDetailsSection";
import IdentityVerificationSection from "../components/sections/financeSections/IdentityVerificationSection";
import VerificationDocumentsSection from "../components/sections/financeSections/VerificationDocumentsSection";

function Finance() {
  const variants = [
    "payment-calculator",
    "personal-info",
    "work-details",
    "reference-person",
    "identity-verification",
    "verification-documents",
  ];

  const [currentSection, setCurrentSection] = useState(variants[0]);

  const currentIndex = variants.indexOf(currentSection) + 1;
  const totalSteps = variants.length;

  const items = [
    {
      title: <Link to="/">Home</Link>,
    },
    {
      title: "Finance",
    },
  ];

  return (
    <>
      <section className="pt-[86px] pb-20 xl:pt-[156px]">
        <div className="container">
          <AppBreadCrumb items={items} />
          {currentSection === "payment-calculator" && (
            <PaymentCalculatorSection
              currentIndex={currentIndex}
              totalSteps={totalSteps}
              handleNextSection={() => {
                setCurrentSection(variants[1]);
              }}
            />
          )}

          {currentSection === "personal-info" && (
            <FinanceLayout
              currentIndex={currentIndex}
              totalSteps={totalSteps}
              title={"Personal Info"}
              handlePreviousSection={() => {
                setCurrentSection(variants[0]);
              }}
              handleNextSection={() => {
                setCurrentSection(variants[2]);
              }}
            >
              <PersonalInfoSection />
            </FinanceLayout>
          )}
          {currentSection === "work-details" && (
            <FinanceLayout
              currentIndex={currentIndex}
              totalSteps={totalSteps}
              title={"Work Details"}
              handlePreviousSection={() => {
                setCurrentSection(variants[1]);
              }}
              handleNextSection={() => {
                setCurrentSection(variants[3]);
              }}
            >
              <WorkDetailsSection />
            </FinanceLayout>
          )}

          {currentSection === "reference-person" && (
            <FinanceLayout
              currentIndex={currentIndex}
              totalSteps={totalSteps}
              title={"Reference Person"}
              handlePreviousSection={() => {
                setCurrentSection(variants[2]);
              }}
              handleNextSection={() => {
                setCurrentSection(variants[4]);
              }}
            >
              <WorkDetailsSection />
            </FinanceLayout>
          )}
          {currentSection === "identity-verification" && (
            <FinanceLayout
              currentIndex={currentIndex}
              totalSteps={totalSteps}
              title={"Identity Verification"}
              handlePreviousSection={() => {
                setCurrentSection(variants[3]);
              }}
              handleNextSection={() => {
                setCurrentSection(variants[5]);
              }}
            >
              <IdentityVerificationSection />
            </FinanceLayout>
          )}
          {currentSection === "verification-documents" && (
            <FinanceLayout
              currentIndex={currentIndex}
              totalSteps={totalSteps}
              title={"Verification Documents"}
              handlePreviousSection={() => {
                setCurrentSection(variants[4]);
              }}
              // handleNextSection={() => {
              //   setCurrentSection(variants[6]);
              // }}
            >
              <VerificationDocumentsSection />
            </FinanceLayout>
          )}
        </div>
      </section>
    </>
  );
}

export default Finance;
