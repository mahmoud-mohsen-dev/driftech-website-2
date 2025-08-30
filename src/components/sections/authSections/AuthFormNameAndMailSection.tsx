import { Button, Form, Input, type FormInstance } from "antd";

function AuthFormNameAndMailSection({
  onFinish,
  //   userRef,
  buttonText,
  form,
}: {
  form: FormInstance<any>;
  onFinish: (values: any) => void;
  //   userRef: React.Ref<InputRef>;
  buttonText: string;
}) {
  return (
    <Form
      form={form}
      onFinishFailed={(e) => {
        console.log("onFinishFailed of signin form was triggered", e);
      }}
      onFinish={onFinish}
      colon={false}
      requiredMark={false}
    >
      <Form.Item
        name="userFullName"
        className="!mb-9"
        labelCol={{ span: 24 }}
        rules={[
          {
            required: true,
            message: "Please input your full name!",
          },
          {
            type: "string",
            message: "Please enter your name",
          },
        ]}
        label={
          <span className="font-inter text-foundation-brown-normal mb-[13px] text-[24.6px] leading-[30px] font-medium">
            Name
          </span>
        }
      >
        <Input
          type="text"
          placeholder="Enter your Name"
          className="placeholder:!text-[20px] placeholder:!leading-[24px]"
          style={{
            color: "var(--color-foundation-brown-normal)",
            minHeight: "77.33px",
            borderRadius: "8px",
            border: "1.76px solid var(--color-foundation-gray-normal)",
            padding: "16px",
            fontSize: "20px",
            lineHeight: "24px",
            fontWeight: "500",
          }}
          //   ref={userRef}
        />
      </Form.Item>
      <Form.Item
        name="userEmail"
        className="!mb-9"
        labelCol={{ span: 24 }}
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
          {
            type: "email",
            message: "Please enter a valid email address",
          },
        ]}
        label={
          <span className="font-inter text-foundation-brown-normal mb-[13px] text-[24.6px] leading-[30px] font-medium">
            Email
          </span>
        }
      >
        <Input
          type="text"
          placeholder="Enter your email"
          className="placeholder:!text-[20px] placeholder:!leading-[24px]"
          style={{
            color: "var(--color-foundation-brown-normal)",
            minHeight: "77.33px",
            borderRadius: "8px",
            border: "1.76px solid var(--color-foundation-gray-normal)",
            padding: "16px",
            fontSize: "20px",
            lineHeight: "24px",
            fontWeight: "500",
          }}
          //   ref={userRef}
        />
      </Form.Item>
      <Button
        type="primary"
        htmlType="submit"
        className="min-h-[56px] w-full cursor-pointer text-2xl leading-[56px] font-medium capitalize"
      >
        {buttonText}
      </Button>
    </Form>
  );
}

export default AuthFormNameAndMailSection;
