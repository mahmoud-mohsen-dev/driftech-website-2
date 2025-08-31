import { Button, Form, Input, type FormInstance, type InputRef } from "antd";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../../hooks/useAuth";
import { useToast } from "../../../hooks/useToast";

function AuthFormRegister({
  // onFinish,
  userRef,
  buttonText,
  form,
}: {
  form: FormInstance<any>;
  // onFinish: (values: any) => void;
  userRef: React.Ref<InputRef>;
  buttonText: string;
}) {
  const { login } = useAuth();
  const { error, success, loading } = useToast();
  const navigate = useNavigate();

  const handleFinish = async (values: any) => {
    console.log("values", values);

    try {
      loading({ isLoading: true });
      const response = await login(values.userPhoneNumber, values.userPassword);

      if (response === null) {
        error("Phone number or password is incorrect");
        return;
      }
      if (!response) {
        error("Login failed");
        return;
      }

      success("You have successfully logged in!");
      setTimeout(() => {
        navigate("/");
      }, 500); // half a second delay
    } catch (e) {
      console.log("error", e);
      error("Login failed");
      form.resetFields();
    } finally {
      loading({ isLoading: false });
    }
  };

  return (
    <Form
      form={form}
      onFinishFailed={(e) => {
        console.log("onFinishFailed of signin form was triggered", e);
      }}
      onFinish={handleFinish}
      colon={false}
      requiredMark={false}
    >
      <Form.Item
        name="userPhoneNumber"
        className="!mb-9"
        labelCol={{ span: 24 }}
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
          {
            pattern: /^01[0-9]{8,10}$/,
            message: "Please enter a valid Egyptian phone number",
          },
        ]}
        label={
          <span className="font-inter text-foundation-brown-normal mb-[13px] text-[24.6px] leading-[30px] font-medium">
            Phone Number
          </span>
        }
      >
        <Input
          type="text"
          placeholder="Enter your Phone Number"
          className="placeholder:!text-[20px] placeholder:!leading-[24px]"
          style={{
            color: "var(--color-foundation-brown-normal)",
            minHeight: "77.33px",
            borderRadius: "8px",
            borderWidth: "1.76px",
            // border: "1.76px solid var(--color-foundation-gray-normal)",
            padding: "16px",
            fontSize: "20px",
            lineHeight: "24px",
            fontWeight: "500",
          }}
          ref={userRef}
        />
      </Form.Item>
      <Form.Item
        name="userPassword"
        className="!mb-9"
        labelCol={{ span: 24 }}
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
          { min: 8, message: "Password must be at least 8 characters" },
        ]}
        label={
          <span className="font-inter text-foundation-brown-normal mb-[13px] text-[24.6px] leading-[30px] font-medium">
            Password
          </span>
        }
      >
        <Input.Password
          placeholder="Enter your Password"
          className="placeholder:!text-[20px] placeholder:!leading-[24px]"
          style={{
            color: "var(--color-foundation-brown-normal)",
            minHeight: "77.33px",
            borderRadius: "8px",
            // border: "1.76px solid var(--color-foundation-gray-normal)",
            padding: "16px",
            fontSize: "20px",
            lineHeight: "24px",
            fontWeight: "500",
            borderWidth: "1.76px",
          }}
        />
      </Form.Item>

      <Link
        to="forget-password"
        className="text-[clamp(0.875rem,0.5vw+0.75rem,1rem)] leading-[clamp(1.25rem,0.5vw+1rem,1.5rem)]"
        style={{ color: "var(--color-foundation-red-normal)" }}
      >
        Forgot your password ?
      </Link>

      <Button
        type="primary"
        htmlType="submit"
        className="mt-7 min-h-[56px] w-full cursor-pointer text-2xl leading-[56px] font-medium capitalize"
      >
        {buttonText}
      </Button>
    </Form>
  );
}

export default AuthFormRegister;
