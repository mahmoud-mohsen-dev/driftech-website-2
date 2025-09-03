import { useState } from "react";
import redCarBackgorund from "../assets/backgrounds/red-car-background-2.png";
import AuthFullSection from "../components/sections/authSections/AuthFullSection.tsx";

function ForgetPassword() {
  const [isCompleteUserForm, setIsCompleteUserForm] = useState(false);

  return (
    <AuthFullSection
      imgSrc={redCarBackgorund}
      altText="red car background"
      authHeaderSectionTitle="Forgot Password"
      authHeaderSectionDescription="Enter your email or phone number to send the verification code"
      buttonText="Send"
      isCompleteUserForm={isCompleteUserForm}
      setIsCompleteUserForm={setIsCompleteUserForm}
      variant="forget-password"
    />
  );
}

export default ForgetPassword;
