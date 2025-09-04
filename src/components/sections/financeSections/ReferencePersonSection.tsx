import { Form } from "antd";
import FormItemWithSelectInputAntd from "../../UI/forms/FormItemWithSelectInputAntd";
import FormItemWithInputTextAntd from "../../UI/forms/FormItemWithInputTextAntd";

function ReferencePersonSection() {
  return (
    <Form colon={false} requiredMark={false}>
      <FormItemWithInputTextAntd
        name="referencePhoneNumber"
        labelText="Reference Phone Number"
        inputPlaceHolder={"Enter Reference Phone Number"}
        rules={[
          {
            required: true,
            message: "Please input your reference phone number!",
          },
        ]}
      />
      <FormItemWithSelectInputAntd
        name="employmentInformation"
        labelText="Employment Information"
        inputPlaceHolder="Select Reference Person `s Relation"
        options={[
          { label: "Mother / Father", value: "mother-father" },
          { label: "Son / Daughter", value: "son-daughter" },
          { label: "Brother / Sister", value: "brother-sister" },
          { label: "Uncle / Aunt", value: "uncle-aunt" },
          { label: "Cousin", value: "cousin" },
          { label: "Other", value: "other" },
        ]}
        rules={[
          {
            required: true,
            message: "Please select your reference person `s relation!",
          },
        ]}
      />
    </Form>
  );
}

export default ReferencePersonSection;
