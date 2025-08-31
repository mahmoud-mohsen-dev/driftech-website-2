import { useEffect, useRef, useState } from "react";
import { useAuth } from "./useAuth";
import type { InputRef } from "antd";
import { useForm } from "antd/es/form/Form";
import { useToast } from "./useToast";
import type { AxiosResponse } from "axios";
import type {
  SendOTPErrorResponse,
  SendOTPSuccessResponse,
  VerifyOTPErrorResponse,
  VerifyOTPSuccessResponse,
} from "../types/otpResponseTypes";
import axios from "../api/axios";

const SEND_OTP = "api/auth/send-otp";
const VERIFY_OTP = "api/auth/verify-otp";

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
      const response: AxiosResponse<
        SendOTPSuccessResponse | SendOTPErrorResponse
      > = await axios.post(
        SEND_OTP,
        { phone: phoneNumber, isForgotPass: 0 }, // isForgotPass: 1 for forgot password && 0 for register
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
      const ApiOTPCode =
        message === "OTP sent successfully."
          ? (response.data.otp_code ?? null)
          : null;
      const userId =
        "user_id" in response.data ? response?.data?.["user_id"] : null;

      console.log("API OTPCode");
      console.log(ApiOTPCode);
      console.log("User Id");
      console.log(userId);

      setAuth((prevState) => ({
        ...prevState,
        tempUserPhoneNumber: phoneNumber,
        user: { id: userId },
      }));
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

      setAuth((prevState) => ({
        ...prevState,
        tempUserPhoneNumber: "",
        user: null,
        // otpCode: null,
        // accessToken: null,
      }));

      handleModalCancel();
    }
  };
  const handleVerifyOtp = async (inputOtpCode: number | null) => {
    console.log("phoneNumber", auth.tempUserPhoneNumber);
    console.log("otpCode", inputOtpCode);
    setOtpModalIsloading(true);

    try {
      const response: AxiosResponse<
        VerifyOTPSuccessResponse | VerifyOTPErrorResponse
      > = await axios.post(
        VERIFY_OTP,
        { phone: auth.tempUserPhoneNumber, otp_code: inputOtpCode },
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
      const isSuccessMessage =
        message ===
        "تم التحقق من الكود بنجاح. الرجاء تعيين كلمة المرور لإكمال التسجيل.";
      const isUserIdFound =
        typeof response?.data?.user_id === "number" ? true : false;
      const isVerifiedOtp = isSuccessMessage && isUserIdFound;

      console.log("message", message);
      console.log("isSuccessMessage", isSuccessMessage);
      console.log("isUserIdFound", isUserIdFound);
      console.log("isVerifiedOtp", isVerifiedOtp);

      if (isVerifiedOtp) {
        // handleModalCancel();
        return true;
      }

      error("Invalid OTP code.");
      console.error("Invalid OTP code.");
      console.log(response);
      return false;
    } catch (err: any) {
      if (err?.response?.data?.error === "Invalid OTP code.") {
        error("Invalid OTP code.");
        console.error("Invalid OTP code.");
        console.log(err);
      } else {
        error("OTP code timeout.");
        console.error("OTP code timeout.");
        console.log(err);
      }

      return false;
    } finally {
      setOtpModalIsloading(false);
      setAuth((prevState) => ({
        ...prevState,
        accessToken: null,
      }));
    }
  };

  const onSendOtp = (formValues: any) => {
    handleSendOtp(formValues.userPhoneNumber);
  };
  const onResendOtp = () => {
    handleSendOtp(auth.tempUserPhoneNumber);
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
    handleVerifyOtp,
  };
}
