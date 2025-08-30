import { Form, Input, Modal } from "antd";

import type { FormInstance, GetProps } from "antd";
import Loader from "../Loader";
import { useEffect } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { useNavigate } from "react-router";

type OTPProps = GetProps<typeof Input.OTP>;

interface OtpModalProps {
  isModalOpen: boolean;
  addUserFormNameAndMail?: boolean;
  showModal: () => void;
  otpModalIsloading: boolean;
  setOtpModalIsloading: React.Dispatch<React.SetStateAction<boolean>>;
  otpForm: FormInstance<any>;
  handleModalOk: () => void;
  handleModalCancel: () => void;
  onResendOtp: () => void;
  setIsUserRegisteredNewPhoneNumber?: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  handleVerifyOtp: (inputOtpCode: number | null) => Promise<boolean>;
}

const OtpModal = ({
  isModalOpen,
  otpModalIsloading,
  setOtpModalIsloading,
  otpForm,
  handleModalOk,
  handleModalCancel,
  onResendOtp,
  addUserFormNameAndMail = false,
  setIsUserRegisteredNewPhoneNumber,
  handleVerifyOtp,
}: OtpModalProps) => {
  const { auth } = useAuth();
  const userPhoneNumber = auth.userPhoneNumber;

  const navigate = useNavigate();

  useEffect(() => {
    let timer: any;

    if (isModalOpen) {
      timer = setTimeout(() => {
        const otpInput = otpForm.getFieldInstance("otp");
        // console.log("otpInput", otpInput);
        if (otpInput) {
          otpInput?.focus?.();
        }
      }, 100);
    }

    return () => {
      if (timer) clearTimeout(timer); // 👈 cleanup on unmount or when modal closes
    };
  }, [isModalOpen, otpForm]);

  // This function is triggered when the user fully enters the OTP
  const onOtpSubmit = async (OTP: string) => {
    setOtpModalIsloading(true);

    const inputOtp = !isNaN(Number(OTP)) ? Number(OTP) : null;

    const response = await handleVerifyOtp(inputOtp);
    console.log("response", response);

    if (response) {
      // setAuth((prevState) => ({ ...prevState, userPhoneNumber }));

      console.log("OTP matched");
      handleModalCancel();

      if (setIsUserRegisteredNewPhoneNumber && !addUserFormNameAndMail) {
        setIsUserRegisteredNewPhoneNumber(true);
        return;
      }

      navigate("/");
    } else {
      setTimeout(() => {
        otpForm.resetFields();
        setOtpModalIsloading(false);
      }, 500);
    }
  };

  const handleChange: OTPProps["onChange"] = (otp) => {
    if (otp.length === 4) {
      onOtpSubmit(otp);
    }
  };

  return (
    <>
      <Modal
        open={isModalOpen}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        centered={true}
        footer={null}
        closeIcon={null}
        className="otp-modal lg:min-w-[750px]"
      >
        <div className="font-poppins space-y-[2.4375rem]">
          <div className="space-y-[1.625rem] text-center">
            <h2 className="text-[1.6rem] leading-[3.0625rem] font-semibold text-black lg:text-[2rem]">
              Check your email
            </h2>
            <p className="text-[1.375rem] leading-[2.1875rem] font-normal lg:text-[1.4375rem]">
              Enter the 6-digit verification code we sent to
            </p>

            <div className="flex flex-wrap justify-center gap-[1.1875rem]">
              <div className="flex min-h-[3.25rem] items-center gap-[0.375rem] rounded-[0.3125rem] px-[0.8125rem]">
                <img
                  src="/icons/mail-02.svg"
                  alt="mail icon"
                  width={26.36}
                  height={36.36}
                  className="h-[36.36px] w-[26.36px]"
                />
                <span className="text-black-default text-sm leading-[1.8125rem] font-medium break-all md:text-base lg:text-[1.1875rem]">
                  {userPhoneNumber}
                </span>
              </div>
              <button
                className="text-foundation-red-normal hover:text-shadow-foundation-orange-normal min-h-full rounded-[0.3125rem] bg-neutral-300 px-[0.8125rem] text-[1.1875rem] leading-[1.8125rem] font-medium transition-colors duration-200 ease-in hover:bg-neutral-200 active:bg-neutral-300"
                onClick={handleModalCancel}
              >
                Change
              </button>
            </div>
          </div>
          <div className="mx-auto w-fit">
            <Form className="otp-form-holder" form={otpForm}>
              <Form.Item name="otp">
                <Input.OTP
                  className="otp-input-holder"
                  length={4}
                  disabled={otpModalIsloading}
                  formatter={(str) => str.replace(/\D/g, "")} // 👈 only keep digits
                  onChange={handleChange}
                />
              </Form.Item>
            </Form>
          </div>
          <div className="text-center">
            <h3 className="text-[1.1875rem] leading-[1.875rem] font-medium text-black">
              Didn’t receive the code?
            </h3>

            <button
              className="text-black-default active:text-black-default hover:text-foundation-red-normal mt-[0.5625rem] rounded-[0.25rem] border-none py-[0.5625rem] text-[1.0625rem] leading-[1.375rem] underline transition-colors duration-200 ease-in"
              type="button"
              disabled={otpModalIsloading}
              onClick={onResendOtp}
            >
              Resend the code via email
            </button>
          </div>
          {otpModalIsloading && <Loader />}
        </div>
      </Modal>
    </>
  );
};

export default OtpModal;
