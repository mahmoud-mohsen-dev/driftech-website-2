import { Form } from "antd";
import FormItemWithInputTextAntd from "../../UI/forms/FormItemWithInputTextAntd";

function PersonalInfoSection() {
  const [form] = Form.useForm();
  return (
    <Form form={form} colon={false} requiredMark={false}>
      <div className="flex items-center gap-5 lg:gap-8">
        <FormItemWithInputTextAntd
          name="firstName"
          labelText="First Name"
          inputPlaceHolder="Salwa"
          rules={[{ required: true, message: "Please input your First Name!" }]}
        />
        <FormItemWithInputTextAntd
          name="lastName"
          labelText="Last Name"
          inputPlaceHolder="Alaa"
          rules={[{ required: true, message: "Please input your Last Name!" }]}
        />
      </div>
      <div>
        <FormItemWithInputTextAntd
          name="governorate"
          labelText="Governorate"
          inputPlaceHolder="Governorate"
          rules={[
            { required: true, message: "Please input your Governorate!" },
          ]}
        />
        <FormItemWithInputTextAntd
          name="district"
          //   labelText="District"
          inputPlaceHolder="District"
          rules={[{ required: true, message: "Please input your District!" }]}
        />
        <FormItemWithInputTextAntd
          name="sreet"
          //   labelText="Sreet"
          inputPlaceHolder="Sreet"
          rules={[{ required: true, message: "Please input your Sreet!" }]}
        />
      </div>
      <div className="flex items-center gap-5 lg:gap-8">
        <FormItemWithInputTextAntd
          name="buildingNumber"
          //   labelText="Building Number"
          inputPlaceHolder="Building Number"
          rules={[
            { required: true, message: "Please input your Building Number!" },
          ]}
        />
        <FormItemWithInputTextAntd
          name="floorNumber"
          //   labelText="Floor Number"
          inputPlaceHolder="Floor Number"
          rules={[
            { required: true, message: "Please input your Floor Number!" },
          ]}
        />
      </div>
    </Form>
  );
}

export default PersonalInfoSection;
