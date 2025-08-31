import { useState } from "react";
import type {
  AuthType,
  SigninErrorResponseType,
  SigninSuccessResponseType,
} from "../types/authContextTypes";
import { AuthContext } from "./AuthContext";
import type { AxiosResponse } from "axios";
import axios from "../api/axios";
import { setCookie } from "../helpers/cookieHelpers";

const LOGIN = "api/auth/login";
const COMPLETE_PROFILE = "api/complete-profile";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [auth, setAuth] = useState<AuthType>({
    tempUserPhoneNumber: "",
    user: null,
  });

  async function login(userPhoneNumber: string, userPassword: string) {
    try {
      const response: AxiosResponse<
        SigninSuccessResponseType | SigninErrorResponseType
      > = await axios.post(
        LOGIN,
        { phone: userPhoneNumber, password: userPassword },
        {
          headers: { "Content-Type": "application/json" },
          // withCredentials: true,
        },
      );
      // ✅ Narrow by checking if "error" exists
      if ("error" in response.data) {
        const errorObj = response.data.error ?? {}; // ✅ fallback to empty object
        const errorMessage =
          Object.values(errorObj).flat().join(", ") || "Unknown error";
        throw new Error(errorMessage);
      }

      // console.log(JSON.stringify(response?.data));
      const message = "message" in response.data ? response.data.message : null;
      const isSuccessMessage = message === "تم تسجيل الدخول إلى حسابك بنجاح.";

      const isTokenFound =
        typeof response?.data?.token === "string" ? true : false;
      const isUserSignedIn = isSuccessMessage && isTokenFound;

      const userData = "user" in response.data ? response.data.user : null;
      // console.log("message", message);
      // console.log("isSuccessMessage", isSuccessMessage);
      // console.log("isTokenFound", isTokenFound);
      // console.log("isUserSignedIn", isUserSignedIn);

      if (isUserSignedIn) {
        // handleModalCancel();
        setCookie("token", response.data.token);
        setAuth((prevState) => ({
          ...prevState,
          user: userData,
        }));

        return true;
      }

      // error("Phone number or password is incorrect.");
      console.error("Phone number or password is incorrect.");
      console.log(response);
      return null;
    } catch (err: any) {
      // error("OTP code timeout.");
      if (err?.response?.data?.error === "بيانات الدخول غير صحيحة.") {
        console.error("Phone number or password is incorrect.");
        return null;
      }
      console.error("Server Error");
      console.log(err);

      return false;
    }
  }
  async function completeUserProfileRegister({
    userId,
    name,
    email,
    password,
    passwordConfirmation,
  }: {
    userId: number | null;
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
  }) {
    try {
      const response: AxiosResponse<
        SigninSuccessResponseType | SigninErrorResponseType
      > = await axios.post(
        COMPLETE_PROFILE,
        {
          user_id: userId,
          name,
          email,
          password,
          password_confirmation: passwordConfirmation,
        },
        {
          headers: { "Content-Type": "application/json" },
          // withCredentials: true,
        },
      );
      // ✅ Narrow by checking if "error" exists
      if ("error" in response.data) {
        const errorObj = response.data.error ?? {}; // ✅ fallback to empty object
        const errorMessage =
          Object.values(errorObj).flat().join(", ") || "Unknown error";
        throw new Error(errorMessage);
      }

      // console.log(JSON.stringify(response?.data));
      const message = "message" in response.data ? response.data.message : null;
      const isSuccessMessage = message === "تم إكمال التسجيل بنجاح.";

      const isTokenFound =
        typeof response?.data?.token === "string" ? true : false;
      const isUserSignedUp = isSuccessMessage && isTokenFound;

      const userData = "user" in response.data ? response.data.user : null;
      // console.log("message", message);
      // console.log("isSuccessMessage", isSuccessMessage);
      // console.log("isTokenFound", isTokenFound);
      // console.log("isUserSignedIn", isUserSignedIn);

      if (isUserSignedUp) {
        // handleModalCancel();
        setCookie("token", response.data.token);
        setAuth((prevState) => ({
          ...prevState,
          user: userData,
        }));

        return true;
      }

      console.error("Registeration failed");
      console.log(response);
      return null;
    } catch (err: any) {
      // error("OTP code timeout.");
      if (err?.response?.data?.error === "بيانات الدخول غير صحيحة.") {
        console.error("Registeration failed");
        return null;
      }
      console.error("Server Error");
      console.log(err);

      return false;
    }
  }

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, login, completeUserProfileRegister }}
    >
      {children}
    </AuthContext.Provider>
  );
};
