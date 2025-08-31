import { useState } from "react";
import redCarBackgorund from "../assets/backgrounds/red-car-background-2.png";
import AuthFullSection from "../components/sections/authSections/AuthFullSection.tsx";

function Signup() {
  const [isCompleteUserForm, setIsCompleteUserForm] = useState(false);

  return (
    <AuthFullSection
      imgSrc={redCarBackgorund}
      altText="red car background"
      authHeaderSectionTitle="Create your account"
      authHeaderSectionDescription="Join us today and unlock all features in just a few steps."
      authFooterSectionLabel="Do you have an account?"
      authFooterSectionLinkHref="/login"
      authFooterSectionLinkText="Login"
      buttonText="Create Account"
      isCompleteUserForm={isCompleteUserForm}
      setIsCompleteUserForm={setIsCompleteUserForm}
      isLoginForm={false}
    />
  );
}

export default Signup;
