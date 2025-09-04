import imgSection from "../../../assets/sections/finance verifications/personal-document.png";
import Btn from "../../UI/buttons/Btn";

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

      <div className="space-y-4 text-center">
        <h2>You're almost done! Just verify your identity</h2>
        <p>
          In this step, you will take a photo of the front & back of your
          national ID, along with a selfie. That’s it!
        </p>
      </div>

      <Btn>Upload Your National ID</Btn>
    </div>
  );
}
export default IdentityVerificationSection;
