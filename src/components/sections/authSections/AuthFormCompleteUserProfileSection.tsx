import { Button, Form, Input, type FormInstance, type InputRef } from "antd";
import { useAuth } from "../../../hooks/useAuth";
import { useToast } from "../../../hooks/useToast";
import { useNavigate } from "react-router";

function AuthFormCompleteUserProfileSection({
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
  const { completeUserProfileRegister, auth } = useAuth();
  const { success, error, loading } = useToast();
  const navigate = useNavigate();

  const handleFormFinish = async (values: {
    name: string;
    email: string;
    password: string;
    confirm: string;
  }) => {
    try {
      loading({ isLoading: true });

      const response = await completeUserProfileRegister({
        userId: auth?.user?.id ?? null,
        name: values.name,
        email: values.email,
        password: values.password,
        passwordConfirmation: values.confirm,
      });

      if (response === null) {
        error("Registration failed");
        return;
      }
      if (!response) {
        error("Something went wrong");
        return;
      }

      success("You have successfully registered!");
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
      onFinish={handleFormFinish}
      colon={false}
      requiredMark={false}
    >
      <Form.Item
        name="name"
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
          ref={userRef}
        />
      </Form.Item>
      <Form.Item
        name="email"
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

      <Form.Item
        name="password"
        className="!mb-9"
        labelCol={{ span: 24 }}
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        label={
          <span className="font-inter text-foundation-brown-normal mb-[13px] text-[24.6px] leading-[30px] font-medium">
            Password
          </span>
        }
        hasFeedback
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

      <Form.Item
        name="confirm"
        dependencies={["password"]}
        className="!mb-9"
        labelCol={{ span: 24 }}
        hasFeedback
        label={
          <span className="font-inter text-foundation-brown-normal mb-[13px] text-[24.6px] leading-[30px] font-medium">
            Confirm Password
          </span>
        }
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The new password that you entered do not match!"),
              );
            },
          }),
        ]}
      >
        <Input.Password
          placeholder="Confirm Password"
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

export default AuthFormCompleteUserProfileSection;
