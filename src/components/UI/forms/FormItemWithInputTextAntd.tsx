import { Form, Input, type InputRef } from "antd";
import type { Rule } from "antd/es/form";

type CustomFormItemWithInputTextAntdProps = {
  name: string;
  formItemClassName?: string;
  colSpan?: number;
  rules?: Rule[] | undefined;
  labelClassName?: string;
  labelText?: string;
  inputRef?: React.Ref<InputRef>;
  inputPlaceHolder: string;
  inputClassName?: string;
  inputStyle?: React.CSSProperties;
};

function FormItemWithInputTextAntd({
  name,
  colSpan = 24,
  rules,
  formItemClassName = "!mb-5 !w-full",
  labelClassName = "font-poppins text-foundation-brown-normal mb-5 text-[20px] leading-[30px] font-medium",
  labelText,
  inputRef,
  inputPlaceHolder,
  inputClassName = "placeholder:!text-[18px] placeholder:!leading-[27px]",
  inputStyle = {
    fontFamily: "var(--font-poppins)",
    color: "var(--color-foundation-gray-normal)",
    minHeight: "62px",
    borderRadius: "8px",
    borderWidth: "1.76px",
    padding: "16px",
    fontSize: "18px",
    lineHeight: "27px",
    fontWeight: "500",
  },
}: CustomFormItemWithInputTextAntdProps) {
  return (
    <Form.Item
      name={name}
      className={formItemClassName}
      labelCol={{ span: colSpan }}
      rules={rules}
      label={
        labelText ? (
          <span className={labelClassName}>{labelText}</span>
        ) : undefined
      }
    >
      <Input
        type="text"
        placeholder={inputPlaceHolder}
        className={inputClassName}
        style={inputStyle}
        ref={inputRef}
        // className='font-poppins'
      />
    </Form.Item>
  );
}

export default FormItemWithInputTextAntd;
