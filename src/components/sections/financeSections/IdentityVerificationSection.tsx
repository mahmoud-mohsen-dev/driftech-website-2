import imgSection from "../../../assets/sections/finance verifications/personal-document.png";
import Btn from "../../UI/buttons/Btn";
import CustomUpload from "../../UI/CustomUpload";

function IdentityVerificationSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <img
        src={imgSection}
        alt="Personal Document Verification"
        width={592}
        height={380}
        className="w-full"
      />

      <div className="space-y-2 text-center">
        <h2 className="font-inter text-[clamp(1.25rem,1.1429rem+0.5357vw,1.625rem)] leading-[1.2] font-semibold text-black">
          You're almost done! Just verify your identity
        </h2>
        <p className="text-foundation-gray-normal font-inter text-[clamp(0.875rem,0.5vw+0.75rem,1rem)] leading-[1.2] font-normal">
          In this step, you will take a photo of the front & back of your
          national ID, along with a selfie. That’s it!
        </p>
      </div>

      <CustomUpload>
        <Btn
          width="w-[210px] lg:w-[390px] h-[53px] lg:h-[62px]"
          className="font-poppins rounded-[10px] text-2xl leading-none font-medium"
        >
          Upload Your National ID
        </Btn>
      </CustomUpload>
    </div>
  );
}
export default IdentityVerificationSection;
