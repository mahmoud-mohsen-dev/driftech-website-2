import { useEffect, useRef, useState } from "react";
import { useAuth } from "./useAuth";
import type { InputRef } from "antd";
import { useForm } from "antd/es/form/Form";
import { useToast } from "./useToast";
import type { AxiosResponse } from "axios";
import type {
  OTPErrorResponse,
  OTPSuccessResponse,
} from "../types/otpResponseTypes";
import axios from "../api/axios";

const SEND_OTP = "api/auth/send-otp";

export default function useOtpModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { auth, setAuth } = useAuth();

  const userRef = useRef<InputRef>(null);

  // OTP Form
  const [otpModalIsloading, setOtpModalIsloading] = useState(false);
  const [authForm] = useForm();
  const [otpForm] = useForm();

  const { error } = useToast();

  useEffect(() => {
    if (userRef.current) {
      userRef.current.focus();
    }
  }, []);

  const handleModalOk = () => {
    setIsModalOpen(false);
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
    otpForm.resetFields();
    setOtpModalIsloading(false);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleSendOtp = async (phoneNumber: string) => {
    console.log("phoneNumber", phoneNumber);

    try {
      const response: AxiosResponse<OTPSuccessResponse | OTPErrorResponse> =
        await axios.post(
          SEND_OTP,
          { phone: phoneNumber, isForgotPass: 1 },
          {
            headers: { "Content-Type": "application/json" },
          },
        );
      // ✅ Narrow by checking if "error" exists
      if ("error" in response.data) {
        const errorObj = response.data.error ?? {}; // ✅ fallback to empty object
        const errorMessage =
          Object.values(errorObj).flat().join(", ") || "Unknown error";
        throw new Error(errorMessage);
      }

      console.log(JSON.stringify(response?.data));
      const message = "message" in response.data ? response.data.message : null;
      const OTPCode =
        message === "OTP sent successfully."
          ? (response.data.otp_code ?? null)
          : null;

      console.log("OTPCode");
      console.log(OTPCode);

      setAuth({
        userPhoneNumber: phoneNumber,
        otpCode: OTPCode,
        accessToken: null,
      });
      showModal();
    } catch (err: any) {
      if (
        err?.response?.data?.error ||
        err?.response?.data?.message === "لا يوجد حساب مرتبط بهذا الرقم."
      ) {
        error("Phone number was not found.");
        console.error("Phone number was not found.");
        console.log(err);
      } else {
        error("No Server Response");
        console.error("No Server Response");
        console.log(err);
      }

      setAuth({
        userPhoneNumber: "",
        otpCode: null,
        accessToken: null,
      });

      handleModalCancel();
    }
  };

  const onSendOtp = (formValues: any) => {
    handleSendOtp(formValues.userPhoneNumber);
  };
  const onResendOtp = () => {
    handleSendOtp(auth.userPhoneNumber);
  };

  return {
    isModalOpen,
    showModal,
    handleModalOk,
    handleModalCancel,
    otpModalIsloading,
    setOtpModalIsloading,
    otpForm,
    authForm,
    onSendOtp,
    onResendOtp,
    userRef,
  };
}
