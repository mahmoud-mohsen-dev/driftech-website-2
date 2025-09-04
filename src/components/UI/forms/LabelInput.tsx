// import ArrowDownIcon from "/icons/arrow-down.svg";

import { forwardRef } from "react";

interface Option {
  label: string;
  value: string | number;
}

interface BaseProps {
  id: string;
  label: string;
  required?: boolean;
  value?: string | number;
  onChange?: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => void;
  wrapperClassName?: string;
  labelClassName?: string;
}

interface InputProps extends BaseProps {
  isSelect?: false;
  type?: string;
  placeholder?: string;
  inputClassName?: string;
}

interface SelectProps extends BaseProps {
  isSelect: true;
  options: Option[];
  selectClassName?: string;
}

type LabelInputProps = InputProps | SelectProps;

// 🔑 forwardRef lets us attach a ref to <input> or <select>
export const LabelInput = forwardRef<
  HTMLInputElement | HTMLSelectElement,
  LabelInputProps
>((props, ref) => {
  const {
    id,
    label,
    value,
    onChange,
    required = false,
    wrapperClassName = "flex w-full flex-col gap-3",
    labelClassName = "font-poppins text-sm leading-[21px] font-medium text-black capitalize",
  } = props;

  const baseInputStyles =
    "border-gray-medium-700 focus:ring-orange-medium placeholder:text-gray-medium-700 h-[46px] rounded-[6.62px] border text-xs leading-[18px] text-black placeholder:text-xs placeholder:leading-[18px] focus:ring-2 focus:outline-none font-poppins";

  if (props.isSelect) {
    const { options, selectClassName } = props;
    const appliedSelectClassName = selectClassName ?? "p-[8.27px] pr-[12px]";
    return (
      <div className={wrapperClassName}>
        <label htmlFor={id} className={labelClassName}>
          {label}
        </label>
        <select
          id={id}
          ref={ref as React.Ref<HTMLSelectElement>}
          value={value}
          onChange={onChange}
          required={required}
          className={`${baseInputStyles} cursor-pointer appearance-none pr-3 ${appliedSelectClassName}`}
        >
          {options.map((option, i) => (
            <option key={i} value={option.value} className="font-poppins">
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }

  const { type = "text", placeholder, inputClassName } = props;
  return (
    <div className={wrapperClassName}>
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
      <input
        id={id}
        ref={ref as React.Ref<HTMLInputElement>}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`${baseInputStyles} ${inputClassName ?? ""}`}
      />
    </div>
  );
});

export default LabelInput;
