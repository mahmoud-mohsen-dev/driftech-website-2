import { Link } from "react-router";
import redCarBackgorund from "../assets/backgrounds/red-car-background-1.png";
import LabelInput from "../components/UI/forms/LabelInput.tsx";
// import Btn from "../components/UI/buttons/Btn.tsx";
import { useAuth } from "../hooks/useAuth.tsx";

import axios from "../api/axios.ts";
import { useEffect, useRef, useState } from "react";
import { Button } from "antd";
import OtpModal from "../components/UI/authModals/OtpModal.tsx";

const LOGIN_URL = "/auth";

function Login() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setAuth } = useAuth();

  const [userEmail, setUserEmail] = useState<string>("");
  const [otpVerificationCode, setOtpVerificationCode] = useState<string>("");

  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLParagraphElement>(null);

  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    if (userRef.current) userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [userEmail]);

  /**
   * Temporary function to hardcode an OTP verification code for testing purposes.
   * FIXME: Remove this function when implementing the actual OTP verification flow.
   */
  // const handleClick = () => {
  //   setOtpVerificationCode("123456");
  // };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Login form submitted email:", userEmail);

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ userEmail, otpVerificationCode }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        },
      );
      // console.log(JSON.stringify(response?.data));
      console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      setAuth({ userEmail, accessToken });

      if (response?.data?.accessToken) {
        setAuth({ userEmail, accessToken });
        setUserEmail("");
        setOtpVerificationCode("");
      }
    } catch (err: any) {
      if (!err?.response) {
        setErrMsg("No Server Response");
        console.error("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
        console.error("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
        console.error("Unauthorized");
      } else {
        setErrMsg("Login Failed");
        console.error("Login Failed");
      }
      if (errRef.current) errRef.current.focus();
    }
  };

  return (
    <main
      // className="bg-neutral-25 min-h-dvh w-full bg-size-[auto_78.61%] bg-position-[100%_80px] bg-no-repeat lg:flex lg:gap-[166px]"
      className="bg-neutral-25 min-h-dvh w-full lg:grid lg:grid-cols-10 lg:gap-[20px]"
      // style={{ backgroundImage: `url(${redCarBackgorund})` }}
    >
      {/* {success && (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="#">Go to Home</a>
          </p>
        </section>
      )} */}
      {errMsg && (
        <p ref={errRef} className={"text-red-500"} aria-live="assertive">
          {errMsg}
        </p>
      )}
      {/* <div className="flex max-w-[564px] flex-col gap-9 lg:mt-[200px] lg:ml-[146px]"> */}
      <div className="mx-5 mt-[12.5rem] flex flex-col gap-9 lg:col-span-4 lg:col-start-2 lg:mx-0 lg:max-w-[450px] xl:col-span-5 xl:col-start-2 xl:max-w-[564px]">
        <div className="min-h-[124.73px]">
          <h1 className="font-poppins text-foundation-brown-normal text-[36px] leading-[54px] font-medium lg:text-[42px] lg:leading-[63px]">
            Welcome back!
          </h1>
          <h3 className="font-poppins text-foundation-gray-normal text-xl leading-[36px] font-medium lg:text-2xl">
            Enter your Credentials to access your account
          </h3>
        </div>

        <form onSubmit={handleSubmit}>
          <LabelInput
            id="login-email"
            ref={userRef}
            type="email"
            required={true}
            label="Email address"
            placeholder="Enter your email"
            labelClassName="font-inter font-medium text-[24.6px] text-foundation-brown-normal leading-[30px]"
            inputClassName="text-foundation-gray-normal font-inter rounded-[8px] font-medium text-[20px] placeholder:text-[20px] placeholder:leading-[24px] leading-[24px] p-4 border-[1.76px] min-h-[77.33px]"
            wrapperClassName="flex w-full flex-col gap-4"
            value={userEmail}
            onChange={(e) => {
              console.log(e);
              setUserEmail(e.target.value);
            }}
          />

          {/* <Btn
            className="font font-inter mt-9 w-full rounded-[8px] text-2xl leading-[56px]"
            height="56px"
            type="submit"
            // handleClick={handleClick}
          >
            Login
          </Btn> */}
          <Button
            type="primary"
            className="mt-9 min-h-[56px] w-full text-2xl leading-[56px] font-medium"
            onClick={showModal}
            typeof="button"
          >
            Login
          </Button>
          <OtpModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            showModal={showModal}
          />
        </form>

        <div>
          <p className="font-poppins text-foundation-gray-normal text-center text-[20px] leading-[40px] font-medium">
            Don’t have an account?
            <Link
              to={"/sign-up"}
              className="text-foundation-orange-normal ml-1.5 underline hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      <div className="hidden lg:col-span-full lg:col-start-6 lg:flex lg:justify-end xl:col-start-7">
        {/* <img src={redCarBackgorund} alt="" className="h-dvh" /> */}
        <img
          src={redCarBackgorund}
          alt="red car background"
          className="auth-background-image"
        />
      </div>
    </main>
  );
}

export default Login;
