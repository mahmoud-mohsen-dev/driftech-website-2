import { Button, ConfigProvider, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useToast } from "../../../hooks/useToast";

function ContactUsForm() {
  const { error } = useToast();
  const onFormFinish = (values: {
    name: string;
    email: string;
    message: string;
  }) => {
    console.log("values", values);
  };
  const onFormFailed = (errorInfo: any) => {
    console.error("Get In Touch Form Failed To Submit", errorInfo);
    error(errorInfo?.errorFields[0]?.errors[0] ?? "Something went wrong");
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            fontFamily: "var(--font-poppins)",
            colorBorder: "var(--color-gray-medium-375)",
            paddingBlock: 10,
            paddingInline: 16,
            borderRadius: 4,
            colorTextPlaceholder: "var(--color-foundation-gray-normal)",
            fontSize: 13,
            lineHeight: 1.54,
          },
          Button: {
            fontFamily: "var(--font-poppins)",
            controlHeight: 48,
            borderRadius: 4,
            fontSize: 16,
            colorText: "var(--color-foundation-gray-lighter)",
            lineHeight: 1.5,
          },
        },
      }}
    >
      <Form
        onFinish={onFormFinish}
        onFinishFailed={onFormFailed}
        requiredMark={true}
        className="shadow-drifter-card flex basis-1/2 flex-col gap-8 rounded-[11px]"
        style={{ paddingBlock: "2.5rem", paddingInline: "1.5rem" }}
      >
        <Form.Item
          name="name"
          style={{ margin: 0 }}
          rules={[{ required: true, message: "Name is required" }]}
        >
          <Input placeholder="Name" style={{ fontWeight: 500, height: 48 }} />
        </Form.Item>
        <Form.Item
          name="email"
          style={{ margin: 0 }}
          rules={[
            { required: true, message: "Email is required" },
            {
              type: "email",
              message: "Please enter a valid email address",
            },
          ]}
        >
          <Input placeholder="Email" style={{ fontWeight: 500, height: 48 }} />
        </Form.Item>
        <Form.Item name="message" style={{ margin: 0 }}>
          <TextArea
            placeholder="Type your message"
            // rows={10}
            autoSize={{ minRows: 6, maxRows: 10 }}
            style={{ fontWeight: 500, height: 48 }}
          />
        </Form.Item>

        <Button type="primary" htmlType="submit" style={{ fontWeight: 600 }}>
          SEND
        </Button>
      </Form>
    </ConfigProvider>
  );
}

export default ContactUsForm;
