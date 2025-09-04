import { Form, Radio } from "antd";
import imgSection from "../../../assets/sections/finance verifications/club-subscription.png";
import Btn from "../../UI/buttons/Btn";
import CustomUpload from "../../UI/CustomUpload";

function VerificationDocumentsSection() {
  return (
    <div className="flex flex-col items-center justify-around gap-8">
      <img
        src={imgSection}
        alt="Personal Document Verification"
        width={488}
        height={349}
        className="w-full max-w-[488px]"
      />

      <Form.Item name={"documentType"} style={{ marginBottom: 0 }}>
        <Radio.Group
          className="flex-row flex-wrap items-center justify-center gap-2 md:gap-3"
          style={{ display: "flex" }}
          options={[
            { label: "Club Subscription Upload", value: "club-subscription" },
            { label: "Car License Upload", value: "car-license" },
          ]}
          defaultValue={"club-subscription"}
        />
      </Form.Item>

      <div className="font-inter space-y-2 text-center">
        <h2 className="text-[clamp(1.25rem,1.1429rem+0.5357vw,1.625rem)] leading-[1.2] font-semibold text-black">
          You're almost done! Just verify your identity
        </h2>
        <p className="text-foundation-gray-normal text-[clamp(0.875rem,0.5vw+0.75rem,1rem)] leading-[1.2] font-normal">
          In this step, you will take a photo of the front & back of your
          national ID, along with a selfie. That’s it!
        </p>
      </div>

      <CustomUpload>
        <Btn
          width="w-[210px] lg:w-[390px] h-[53px] lg:h-[62px]"
          className="font-poppins rounded-[10px] text-2xl leading-none font-medium"
        >
          Upload Files
        </Btn>
      </CustomUpload>
    </div>
  );
}

export default VerificationDocumentsSection;
