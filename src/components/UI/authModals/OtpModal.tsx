import { Form, Input, Modal } from "antd";

import type { GetProps } from "antd";
import Loader from "../Loader";
import { useState } from "react";
import { useForm } from "antd/es/form/Form";

type OTPProps = GetProps<typeof Input.OTP>;

interface OtpModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: () => void;
}

const OtpModal = ({ isModalOpen, setIsModalOpen }: OtpModalProps) => {
  const [loading, setLoading] = useState(false);
  const [form] = useForm();

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onChange: OTPProps["onChange"] = (text) => {
    console.log("onChange:", text);
    setLoading(true);
  };

  const onInput: OTPProps["onInput"] = (value) => {
    console.log("onInput:", value);
  };

  const sharedProps: OTPProps = {
    onChange,
    onInput,
  };

  return (
    <>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        footer={null}
        closeIcon={null}
        styles={{
          content: {
            paddingBlock: 43,
            paddingInline: 53,
          },
        }}
        className="lg:min-w-[750px]"
      >
        <div className="font-poppins space-y-[2.4375rem]">
          <div className="space-y-[1.625rem] text-center">
            <h2 className="text-[2rem] font-semibold text-black">
              Check your email
            </h2>
            <p className="text-[1.4375rem] font-normal">
              Enter the 6-digit verification code we sent to
            </p>

            <div className="flex justify-center gap-[1.1875rem]">
              <div className="flex min-h-[3.25rem] items-center gap-[0.375rem] rounded-[0.3125rem] px-[0.8125rem]">
                <img
                  src="/icons/mail-02.svg"
                  alt="mail icon"
                  width={26.36}
                  height={36.36}
                  className="h-[36.36px] w-[26.36px]"
                />
                <span className="text-black-default text-[1.1875rem] leading-[1.8125rem] font-medium">
                  salwalaa770@gmail.com
                </span>
              </div>
              <button className="text-foundation-red-normal min-h-full rounded-[0.3125rem] bg-neutral-300 px-[0.8125rem] text-[1.1875rem] leading-[1.8125rem] font-medium transition-colors duration-200 ease-in hover:bg-neutral-500 active:bg-neutral-300">
                Change
              </button>
            </div>
          </div>
          <div className="mx-auto w-fit">
            <Form className="otp-form-holder" form={form}>
              <Input.OTP
                className="otp-input-holder"
                length={6}
                disabled={loading}
                formatter={(str) => str.toUpperCase()}
                autoFocus
                {...sharedProps}
              />
            </Form>
          </div>
          <div className="text-center">
            <h3 className="text-balck text-[1.1875rem] font-medium">
              Didn’t receive the code?
            </h3>

            <button
              className="text-black-default active:text-black-default hover:text-foundation-red-normal mt-[0.5625rem] rounded-[0.25rem] border-none py-[0.5625rem] text-[1.0625rem] leading-[1.375rem] underline transition-colors duration-200 ease-in"
              type="button"
              disabled={loading}
            >
              Resend the code via email
            </button>
          </div>
          {loading && <Loader />}
        </div>
      </Modal>
    </>
  );
};

export default OtpModal;
