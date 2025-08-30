import { useState } from "react";
import redCarBackgorund from "../assets/backgrounds/red-car-background-2.png";
import AuthFullSection from "../components/sections/authSections/AuthFullSection.tsx";

function Signup() {
  const [isUserRegisteredNewPhoneNumber, setIsUserRegisteredNewPhoneNumber] =
    useState(false);

  return (
    <AuthFullSection
      imgSrc={redCarBackgorund}
      altText="red car background"
      authHeaderSectionTitle="Create your account"
      authHeaderSectionDescription="Join us for an exceptional experience."
      authFooterSectionLabel="Do you have an account?"
      authFooterSectionLinkHref="/login"
      authFooterSectionLinkText="Login"
      buttonText="Create Account"
      addUserFormNameAndMail={isUserRegisteredNewPhoneNumber}
      setIsUserRegisteredNewPhoneNumber={setIsUserRegisteredNewPhoneNumber}
    />
  );
}

export default Signup;
