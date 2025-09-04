import { Form } from "antd";
import FormItemWithInputTextAntd from "../../UI/forms/FormItemWithInputTextAntd";
import FormItemWithSelectInputAntd from "../../UI/forms/FormItemWithSelectInputAntd";

function WorkDetailsSection() {
  return (
    <Form colon={false} requiredMark={false}>
      <FormItemWithSelectInputAntd
        name="employmentInformation"
        labelText="Employment Information"
        inputPlaceHolder="Select Employment Status"
        options={[
          { label: "Employed", value: "employed" },
          { label: "Self Employed", value: "self-employed" },
          { label: "Unemployed", value: "unemployed" },
        ]}
        rules={[
          { required: true, message: "Please select Employment Status!" },
        ]}
      />
      <FormItemWithSelectInputAntd
        name="JobTitle"
        labelText="Job Title"
        inputPlaceHolder="Find your Jop Title"
        options={[
          { label: "Accountant", value: "accountant" },
          { label: "Accountant freelancer", value: "accountant-freelancer" },
          { label: "Auditor", value: "auditor" },
        ]}
        rules={[{ required: true, message: "Please input your Job Title!" }]}
      />
      <FormItemWithInputTextAntd
        name="netIncome"
        labelText="Net Income"
        inputPlaceHolder={"Net Monthly Income(EGP)"}
        rules={[{ required: true, message: "Please input Net Income!" }]}
        prefix={
          <span className="text-foundation-brown-normal bg-background font-poppins mr-1.5 rounded-[6px] px-2.5 py-[5px] text-[20px] leading-normal font-normal">
            EGP
          </span>
        }
      />
    </Form>
  );
}

export default WorkDetailsSection;
