import useOtpModal from "../../../hooks/useOtpModal";
import AuthHeaderSection from "./AuthHeaderSection";
import OtpModal from "../../UI/authModals/OtpModal";
import AuthFooterSection from "./AuthFooterSection";
import AuthFormLogin from "./AuthFormLogin";
import AuthFormRegister from "./AuthFormRegister";
import { useForm } from "antd/es/form/Form";
import AuthFormCompleteUserProfileSection from "./AuthFormCompleteUserProfileSection";

function AuthFullSection({
  imgSrc,
  altText,
  authHeaderSectionTitle,
  authHeaderSectionDescription,
  authFooterSectionLabel,
  authFooterSectionLinkHref,
  authFooterSectionLinkText,
  buttonText,
  isCompleteUserForm = false,
  isLoginForm = false,
  setIsCompleteUserForm,
}: {
  imgSrc: string;
  altText: string;
  authHeaderSectionTitle: string;
  authHeaderSectionDescription: string;
  authFooterSectionLabel: string;
  authFooterSectionLinkHref: string;
  authFooterSectionLinkText: string;
  buttonText: string;
  isLoginForm?: boolean;
  isCompleteUserForm?: boolean;
  setIsCompleteUserForm?: React.Dispatch<React.SetStateAction<boolean>>;
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
    handleVerifyOtp,
  } = useOtpModal();

  const [authForm] = useForm();

  return (
    <main
      // className="bg-neutral-25 min-h-dvh w-full bg-size-[auto_78.61%] bg-position-[100%_80px] bg-no-repeat lg:flex lg:gap-[166px]"
      className="bg-neutral-25 min-h-dvh w-full lg:grid lg:grid-cols-10 lg:gap-[20px]"
      // style={{ backgroundImage: `url(${imgSrc})` }}
    >
      <div
        className={`mx-5 ${isCompleteUserForm ? "mt-[6.25rem]" : "mt-[12.5rem]"} flex flex-col gap-9 lg:col-span-4 lg:col-start-2 lg:mx-0 lg:max-w-[450px] xl:col-span-5 xl:col-start-2 xl:max-w-[564px]`}
      >
        <AuthHeaderSection
          title={authHeaderSectionTitle}
          description={authHeaderSectionDescription}
        />

        {isLoginForm ? (
          <AuthFormLogin
            form={authForm}
            userRef={userRef}
            buttonText={buttonText}
          />
        ) : (
          <>
            {/* Sign up form */}
            {isCompleteUserForm ? (
              <AuthFormCompleteUserProfileSection
                form={authForm}
                userRef={userRef}
                buttonText={buttonText}
              />
            ) : (
              <>
                <AuthFormRegister
                  form={authForm}
                  handleFinish={onSendOtp}
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
                  addUserFormNameAndMail={isCompleteUserForm}
                  setIsCompleteUserForm={setIsCompleteUserForm}
                  handleVerifyOtp={handleVerifyOtp}
                />
              </>
            )}
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
