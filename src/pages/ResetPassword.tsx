import { useState } from "react";
import AuthFullSection from "../components/sections/authSections/AuthFullSection";
import redCarBackgorund from "../assets/backgrounds/red-car-background-2.png";

function ResetPassword() {
  const [isCompleteUserForm, setIsCompleteUserForm] = useState(false);

  return (
    <AuthFullSection
      imgSrc={redCarBackgorund}
      altText="red car background"
      authHeaderSectionTitle="Identity verified successfully"
      authHeaderSectionDescription="Enter a strong password of at least 8 characters"
      buttonText="Save"
      isCompleteUserForm={isCompleteUserForm}
      setIsCompleteUserForm={setIsCompleteUserForm}
      variant="reset-password"
    />
  );
}

export default ResetPassword;
