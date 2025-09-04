import { Form, Radio } from "antd";
import imgSection from "../../../assets/sections/finance verifications/club-subscription.png";
import Btn from "../../UI/buttons/Btn";

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

      <div>
        <Form.Item name={"documentType"}>
          <Radio.Group
            className="flex flex-col gap-4"
            options={[
              { label: "Club Subscription Upload", value: "club-subscription" },
              { label: "Car License Upload", value: "car-license" },
            ]}
          ></Radio.Group>
        </Form.Item>
      </div>

      <div className="space-y-5 text-center">
        <h2>You're almost done! Just verify your identity</h2>
        <p>
          In this step, you will take a photo of the front & back of your
          national ID, along with a selfie. That’s it!
        </p>
      </div>

      <Btn>Upload Files</Btn>
    </div>
  );
}

export default VerificationDocumentsSection;
