import useOtpModal from "../../hooks/useOtpModal";
import AuthHeaderSection from "./authHeaderSection";
import OtpModal from "../UI/authModals/OtpModal";
import AuthFooterSection from "./AuthFooterSection";
import AuthFormPhoneSection from "./AuthFormPhoneSection";
import { useForm } from "antd/es/form/Form";
import AuthFormNameAndMailSection from "./AuthFormNameAndMailSection";
import { useNavigate } from "react-router";

function AuthFullSection({
  imgSrc,
  altText,
  authHeaderSectionTitle,
  authHeaderSectionDescription,
  authFooterSectionLabel,
  authFooterSectionLinkHref,
  authFooterSectionLinkText,
  buttonText,
  addUserFormNameAndMail = false,
  setIsUserRegisteredNewPhoneNumber,
}: {
  imgSrc: string;
  altText: string;
  authHeaderSectionTitle: string;
  authHeaderSectionDescription: string;
  authFooterSectionLabel: string;
  authFooterSectionLinkHref: string;
  authFooterSectionLinkText: string;
  buttonText: string;
  addUserFormNameAndMail?: boolean;
  setIsUserRegisteredNewPhoneNumber?: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}) {
  const {
    isModalOpen,
    showModal,
    handleModalOk,
    handleModalCancel,
    otpModalIsloading,
    setOtpModalIsloading,
    otpForm,
    onSendOtp,
    onResendOtp,
    userRef,
  } = useOtpModal();

  const [authForm] = useForm();
  const navigate = useNavigate();

  const navigateToHomePage = () => {
    navigate("/");
  };

  return (
    <main
      // className="bg-neutral-25 min-h-dvh w-full bg-size-[auto_78.61%] bg-position-[100%_80px] bg-no-repeat lg:flex lg:gap-[166px]"
      className="bg-neutral-25 min-h-dvh w-full lg:grid lg:grid-cols-10 lg:gap-[20px]"
      // style={{ backgroundImage: `url(${imgSrc})` }}
    >
      <div
        className={`mx-5 ${addUserFormNameAndMail ? "mt-[6.25rem]" : "mt-[12.5rem]"} flex flex-col gap-9 lg:col-span-4 lg:col-start-2 lg:mx-0 lg:max-w-[450px] xl:col-span-5 xl:col-start-2 xl:max-w-[564px]`}
      >
        <AuthHeaderSection
          title={authHeaderSectionTitle}
          description={authHeaderSectionDescription}
        />

        {addUserFormNameAndMail ? (
          <AuthFormNameAndMailSection
            form={authForm}
            onFinish={navigateToHomePage}
            // userRef={userRef}
            buttonText={buttonText}
          />
        ) : (
          <>
            <AuthFormPhoneSection
              form={authForm}
              onFinish={onSendOtp}
              userRef={userRef}
              buttonText={buttonText}
            />
            <OtpModal
              isModalOpen={isModalOpen}
              showModal={showModal}
              otpModalIsloading={otpModalIsloading}
              setOtpModalIsloading={setOtpModalIsloading}
              otpForm={otpForm}
              handleModalOk={handleModalOk}
              handleModalCancel={handleModalCancel}
              onResendOtp={onResendOtp}
              addUserFormNameAndMail={addUserFormNameAndMail}
              setIsUserRegisteredNewPhoneNumber={
                setIsUserRegisteredNewPhoneNumber
              }
            />
          </>
        )}

        <AuthFooterSection
          label={authFooterSectionLabel}
          linkHref={authFooterSectionLinkHref}
          linkText={authFooterSectionLinkText}
        />
      </div>
      <div className="hidden lg:col-span-full lg:col-start-6 lg:flex lg:justify-end xl:col-start-7">
        {/* <img src={imgSrc} alt={altText} className="h-dvh" /> */}
        <img src={imgSrc} alt={altText} className="auth-background-image" />
      </div>
    </main>
  );
}

export default AuthFullSection;
