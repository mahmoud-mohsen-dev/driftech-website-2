// import ArrowDownIcon from "/icons/arrow-down.svg";

interface LabelInputProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => void;
  required?: boolean;
  isSelect?: boolean;
  options?: { label: string; value: string }[];
}

export const LabelInput: React.FC<LabelInputProps> = ({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  isSelect = false,
  options = [],
}) => {
  return (
    <div className="flex w-full flex-col gap-[12px]">
      <label
        htmlFor={id}
        className="font-poppins text-sm leading-[21px] font-medium text-black capitalize"
      >
        {label}
      </label>

      {isSelect && options.length > 0 ? (
        <select
          id={id}
          value={value}
          onChange={onChange}
          required={required}
          className="border-gray-medium-700 focus:ring-orange-medium placeholder:text-gray-medium-700 h-[46px] cursor-pointer appearance-none rounded-[6.62px] border p-[8.27px] pr-[12px] text-xs leading-[18px] text-black placeholder:text-xs placeholder:leading-[18px] focus:ring-2"
        >
          {options.map(
            (option: { label: string; value: string }, i: number) => (
              <option key={i} value={option.value}>
                {option.label}
              </option>
            ),
          )}
        </select>
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className="border-gray-medium-700 focus:ring-orange-medium placeholder:text-gray-medium-700 h-[46px] rounded-[6.62px] border p-[8.27px] text-xs leading-[18px] text-black placeholder:text-xs placeholder:leading-[18px] focus:ring-2 focus:outline-none"
        />
      )}
    </div>
  );
};

export default LabelInput;
