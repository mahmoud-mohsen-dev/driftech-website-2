// import { Link } from "react-router";
// import redCarBackgorund from "../assets/backgrounds/red-car-background-1.png";
// import LabelInput from "../components/UI/forms/LabelInput";
// import Btn from "../components/UI/buttons/Btn";

// function LoginPage() {
//   const handleLogIn = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log("Login form submitted:", event);
//   };

//   return (
//     <main
//       className="bg-neutral-25 min-h-dvh w-full bg-size-[auto_78.61%] bg-position-[100%_80px] bg-no-repeat lg:flex lg:gap-[166px]"
//       style={{ backgroundImage: `url(${redCarBackgorund})` }}
//     >
//       <div className="flex max-w-[564px] flex-col gap-9 lg:mt-[200px] lg:ml-[146px]">
//         <div className="min-h-[124.73px]">
//           <h1 className="font-poppins text-foundation-brown-normal text-[42px] leading-[63px] font-medium">
//             Welcome back!
//           </h1>
//           <h3 className="font-poppins text-foundation-gray-normal leading-[36px] font-medium">
//             Enter your Credentials to access your account
//           </h3>
//         </div>

//         <form onSubmit={handleLogIn}>
//           <LabelInput
//             id="login-email"
//             type="email"
//             required={true}
//             label="Email address"
//             placeholder="Enter your email"
//             labelClassName="font-inter font-medium text-[24.6px] text-foundation-brown-normal leading-[30px]"
//             inputClassName="text-foundation-gray-normal font-inter rounded-[8px] font-medium text-[20px] placeholder:text-[20px] placeholder:leading-[24px] leading-[24px] p-4 border-[1.76px] min-h-[77.33px]"
//             wrapperClassName="flex w-full flex-col gap-4"
//           />

//           <Btn
//             className="font font-inter mt-9 w-full rounded-[8px] text-2xl leading-[56px]"
//             height="56px"
//             type="submit"
//           >
//             Login
//           </Btn>
//         </form>

//         <div>
//           <p className="font-poppins text-foundation-gray-normal text-center text-[20px] leading-[40px] font-medium">
//             Don’t have an account?
//             <Link
//               to={"/sign-up"}
//               className="text-foundation-orange-normal ml-1.5"
//             >
//               Sign Up
//             </Link>
//           </p>
//         </div>
//       </div>
//     </main>
//   );
// }

// export default LoginPage;

import { Link } from "react-router";
// import redCarBackgorund from "../assets/backgrounds/red-car-background-1.png";
import redCarBackgorund from "../assets/backgrounds/red-car-background-1.png";
import LabelInput from "../components/UI/forms/LabelInput.tsx";
import Btn from "../components/UI/buttons/Btn.tsx";

function LoginPage() {
  const handleLogIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Login form submitted:", event);
  };

  return (
    <main
      // className="bg-neutral-25 min-h-dvh w-full bg-size-[auto_78.61%] bg-position-[100%_80px] bg-no-repeat lg:flex lg:gap-[166px]"
      className="bg-neutral-25 min-h-dvh w-full lg:grid lg:grid-cols-10 lg:gap-[20px]"
      // style={{ backgroundImage: `url(${redCarBackgorund})` }}
    >
      {/* <div className="flex max-w-[564px] flex-col gap-9 lg:mt-[200px] lg:ml-[146px]"> */}
      <div className="col-span-5 col-start-2 flex max-w-[564px] flex-col gap-9 lg:mt-[12.5rem]">
        <div className="min-h-[124.73px]">
          <h1 className="font-poppins text-foundation-brown-normal text-[42px] leading-[63px] font-medium">
            Welcome back!
          </h1>
          <h3 className="font-poppins text-foundation-gray-normal leading-[36px] font-medium">
            Enter your Credentials to access your account
          </h3>
        </div>

        <form onSubmit={handleLogIn}>
          <LabelInput
            id="login-email"
            type="email"
            required={true}
            label="Email address"
            placeholder="Enter your email"
            labelClassName="font-inter font-medium text-[24.6px] text-foundation-brown-normal leading-[30px]"
            inputClassName="text-foundation-gray-normal font-inter rounded-[8px] font-medium text-[20px] placeholder:text-[20px] placeholder:leading-[24px] leading-[24px] p-4 border-[1.76px] min-h-[77.33px]"
            wrapperClassName="flex w-full flex-col gap-4"
          />

          <Btn
            className="font font-inter mt-9 w-full rounded-[8px] text-2xl leading-[56px]"
            height="56px"
            type="submit"
          >
            Login
          </Btn>
        </form>

        <div>
          <p className="font-poppins text-foundation-gray-normal text-center text-[20px] leading-[40px] font-medium">
            Don’t have an account?
            <Link
              to={"/sign-up"}
              className="text-foundation-orange-normal ml-1.5"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      <div className="col-span-full col-start-7 flex justify-end">
        {/* <img src={redCarBackgorund} alt="" className="h-dvh" /> */}
        <img src={redCarBackgorund} alt="" />
      </div>
    </main>
  );
}

export default LoginPage;
