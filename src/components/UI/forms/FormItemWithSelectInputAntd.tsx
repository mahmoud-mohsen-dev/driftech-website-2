import { Form, Select } from "antd";
import type { Rule } from "antd/es/form";

type CustomFormItemWithSelectInputAntdProps = {
  name: string;
  formItemClassName?: string;
  colSpan?: number;
  rules?: Rule[] | undefined;
  labelClassName?: string;
  labelText?: string;
  inputPlaceHolder: string;
  selectClassName?: string;
  selectStyle?: React.CSSProperties;

  options: { value: string; label: string }[];
};

function FormItemWithSelectInputAntd({
  name,
  colSpan = 24,
  rules,
  formItemClassName = "!mb-5 !w-full",
  labelClassName = "font-poppins text-foundation-brown-normal mb-5 text-[20px] leading-[30px] font-medium",
  labelText,
  inputPlaceHolder,
  selectClassName = "placeholder:!text-[18px] placeholder:!leading-[27px]",
  selectStyle = {
    fontFamily: "var(--font-poppins)",
    color: "var(--color-foundation-gray-normal)",
    minHeight: "62px",
    borderRadius: "8px",
    // borderWidth: "1.76px",
    // outlineWidth: "1.76px",
    // padding: "16px 10px",
    fontSize: "20px",
    lineHeight: "30px",
    fontWeight: "500",
    // borderWidth: "1.76px",
  },
  options,
}: CustomFormItemWithSelectInputAntdProps) {
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
      {/* <Input
        type="text"
        placeholder={inputPlaceHolder}
        className={inputClassName}
        style={inputStyle}
        ref={inputRef}
        // className='font-poppins'
      /> */}

      <Select
        placeholder={inputPlaceHolder}
        options={options}
        className={`finance-select ${selectClassName}}`}
        style={selectStyle}
        //   root: {
        //     fontFamily: "var(--font-poppins)",
        //     color: "var(--color-foundation-gray-normal)",
        //     minHeight: "62px",
        //     borderRadius: "8px",
        //     borderWidth: "1.76px",
        //     outlineWidth: "1.76px",
        //     // padding: "16px 10px",
        //     fontSize: "18px",
        //     lineHeight: "27px",
        //     fontWeight: "500",
        //   },
        // }}
      />
    </Form.Item>
  );
}

export default FormItemWithSelectInputAntd;
