import useOtpModal from "../../../hooks/useOtpModal";
import AuthHeaderSection from "./AuthHeaderSection";
import OtpModal from "../../UI/authModals/OtpModal";
import AuthFooterSection from "./AuthFooterSection";
import AuthFormLogin from "./AuthFormLogin";
import AuthFormRegister from "./AuthFormRegister";
import { useForm } from "antd/es/form/Form";
import AuthFormCompleteUserProfileSection from "./AuthFormCompleteUserProfileSection";
import AuthFormForgetPassword from "./AuthFormForgetPassword";
import AuthFormResetPassword from "./AuthFormResetPassword";

const SEND_OTP = "api/auth/send-otp";

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
  setIsCompleteUserForm,
  variant,
}: {
  imgSrc: string;
  altText: string;
  authHeaderSectionTitle: string;
  authHeaderSectionDescription: string;
  authFooterSectionLabel?: string;
  authFooterSectionLinkHref?: string;
  authFooterSectionLinkText?: string;
  buttonText: string;
  variant: "login" | "sign-up" | "forget-password" | "reset-password";
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
      // className="bg-neutral-25 min-h-svh w-full bg-size-[auto_78.61%] bg-position-[100%_80px] bg-no-repeat lg:flex lg:gap-[166px]"
      className="bg-neutral-25 min-h-svh w-full lg:grid lg:grid-cols-10 lg:gap-[20px]"
      // style={{ backgroundImage: `url(${imgSrc})` }}
    >
      <div
        className={`mx-5 ${isCompleteUserForm || variant === "reset-password" ? "mt-[6.25rem]" : "mt-[12.5rem]"} flex flex-col gap-9 lg:col-span-4 lg:col-start-2 lg:mx-0 lg:max-w-[450px] xl:col-span-5 xl:col-start-2 xl:max-w-[564px]`}
      >
        <AuthHeaderSection
          title={authHeaderSectionTitle}
          description={authHeaderSectionDescription}
          variant={variant}
        />
        {variant === "login" && (
          <AuthFormLogin
            form={authForm}
            userRef={userRef}
            buttonText={buttonText}
          />
        )}

        {/* Sign up form */}
        {variant === "sign-up" ? (
          isCompleteUserForm ? (
            <AuthFormCompleteUserProfileSection
              form={authForm}
              userRef={userRef}
              buttonText={buttonText}
            />
          ) : (
            <>
              <AuthFormRegister
                form={authForm}
                handleFinish={(values: any) => onSendOtp(values, SEND_OTP, 0)}
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
                addUserFormNameAndMail={isCompleteUserForm}
                setIsCompleteUserForm={setIsCompleteUserForm}
                onResendOtp={() => onResendOtp(SEND_OTP, 0)}
                handleVerifyOtp={handleVerifyOtp}
              />
            </>
          )
        ) : null}

        {/* Forget Password */}
        {variant === "forget-password" && (
          <>
            <AuthFormForgetPassword
              form={authForm}
              handleFinish={(values: any) => onSendOtp(values, SEND_OTP, 1)}
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
              onResendOtp={() => onResendOtp(SEND_OTP, 1)}
              addUserFormNameAndMail={isCompleteUserForm}
              setIsCompleteUserForm={setIsCompleteUserForm}
              handleVerifyOtp={handleVerifyOtp}
              variant="forget-password"
            />
          </>
        )}

        {variant === "reset-password" && (
          <AuthFormResetPassword
            form={authForm}
            userRef={userRef}
            buttonText={buttonText}
          />
        )}

        {authFooterSectionLabel &&
          authFooterSectionLinkHref &&
          authFooterSectionLinkText && (
            <AuthFooterSection
              label={authFooterSectionLabel}
              linkHref={authFooterSectionLinkHref}
              linkText={authFooterSectionLinkText}
            />
          )}
      </div>
      <div className="hidden lg:col-span-full lg:col-start-6 lg:flex lg:justify-end xl:col-start-7">
        {/* <img src={imgSrc} alt={altText} className="h-svh" /> */}
        <img src={imgSrc} alt={altText} className="auth-background-image" />
      </div>
    </main>
  );
}

export default AuthFullSection;
