import redCarBackgorund from "../assets/backgrounds/red-car-background-1.png";
import AuthFullSection from "../components/sections/authSections/AuthFullSection.tsx";

function Login() {
  return (
    <AuthFullSection
      imgSrc={redCarBackgorund}
      altText="red car background"
      authHeaderSectionTitle="Welcome back!"
      authHeaderSectionDescription="Enter your Credentials to access your account"
      authFooterSectionLabel="Don't have an account ? "
      authFooterSectionLinkHref="/sign-up"
      authFooterSectionLinkText="Sign Up"
      buttonText="Login"
    />
  );
}

export default Login;
