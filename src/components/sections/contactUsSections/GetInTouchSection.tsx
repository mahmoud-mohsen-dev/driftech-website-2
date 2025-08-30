import { Button, ConfigProvider, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import GetInTouchInfoItemList from "./GetInTouchInfoItemList";

function GetInTouchSection() {
  const onFormFinish = (values: {
    name: string;
    email: string;
    message: string;
  }) => {
    console.log("values", values);
  };
  const onFormFailed = (errorInfo: any) => {
    console.log("Get In Touch Form Failed To Submit", errorInfo);
  };

  return (
    <section className="bg-neutral-0 py-20">
      <div className="container flex flex-col justify-center gap-12 lg:flex-row-reverse">
        <div className="basis-1/2 space-y-[4.0625rem]">
          <div className="font-inter space-y-[0.875rem]">
            <h2 className="get-in-touch w-fit text-[clamp(1.5rem,1.3929rem+0.5357vw,1.875rem)] leading-[clamp(1.875rem,1.7679rem+0.5357vw,2.25rem)] font-semibold">
              Get In Touch
            </h2>
            <p className="text-foundation-gray-normal-hover text-[clamp(0.875rem,0.8036rem+0.3571vw,1.125rem)] leading-[1.66]">
              We’re here to answer your questions and help you find exactly what
              you’re looking for reach out anytime!
            </p>
          </div>
          {/* Get in touch info */}
          <div className="space-y-4 sm:space-y-2.5">
            <GetInTouchInfoItemList
              title="Working Hours"
              listItems={[
                "Monday - Friday 11:00 AM - 12:00 PM",
                "Saturday 07:00 AM - 08:00 PM",
              ]}
              iconSrc="/icons/clock-fill.svg"
              iconAlt="clock icon"
            />
            <GetInTouchInfoItemList
              title="Phone Number"
              listItems={["(+888) 123 456 765"]}
              iconSrc="/icons/telephone-fill.svg"
              iconAlt="telephone icon"
            />
          </div>
        </div>
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
              <Input
                placeholder="Name"
                style={{ fontWeight: 500, height: 48 }}
              />
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
              <Input
                placeholder="Email"
                style={{ fontWeight: 500, height: 48 }}
              />
            </Form.Item>
            <Form.Item name="message" style={{ margin: 0 }}>
              <TextArea
                placeholder="Type your message"
                // rows={10}
                autoSize={{ minRows: 6, maxRows: 10 }}
                style={{ fontWeight: 500, height: 48 }}
              />
            </Form.Item>

            <Button type="primary" typeof="submit" style={{ fontWeight: 600 }}>
              SEND
            </Button>
          </Form>
        </ConfigProvider>
      </div>
    </section>
  );
}

export default GetInTouchSection;
