// import ArrowDownIcon from "/icons/arrow-down.svg";

interface Option {
  label: string;
  value: string;
}

interface BaseProps {
  id: string;
  label: string;
  required?: boolean;
  value?: string;
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

export const LabelInput: React.FC<LabelInputProps> = (props) => {
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
    "border-gray-medium-700 focus:ring-orange-medium placeholder:text-gray-medium-700 h-[46px] rounded-[6.62px] border text-xs leading-[18px] text-black placeholder:text-xs placeholder:leading-[18px] focus:ring-2 focus:outline-none";

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
          value={value}
          onChange={onChange}
          required={required}
          className={`${baseInputStyles} cursor-pointer appearance-none pr-3 ${appliedSelectClassName}`}
        >
          {options.map((option, i) => (
            <option key={i} value={option.value}>
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
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`${baseInputStyles} ${inputClassName ?? ""}`}
      />
    </div>
  );
};

// interface LabelInputProps {
//   id: string;
//   label: string;
//   type?: string;
//   placeholder?: string;
//   value?: string;
//   onChange?: (
//     e:
//       | React.ChangeEvent<HTMLInputElement>
//       | React.ChangeEvent<HTMLSelectElement>,
//   ) => void;
//   required?: boolean;
//   isSelect?: boolean;
//   options?: { label: string; value: string }[];
//   labelClassName?: string;
//   selectClassName?: string;
//   inputClassName?: string;
// }

// export const LabelInput: React.FC<LabelInputProps> = ({
//   id,
//   label,
//   type = "text",
//   placeholder,
//   value,
//   onChange,
//   required = false,
//   isSelect = false,
//   options = [],
//   labelClassName = "font-poppins text-sm leading-[21px] font-medium text-black capitalize",
//   selectClassName = "border-gray-medium-700 focus:ring-orange-medium placeholder:text-gray-medium-700 h-[46px] cursor-pointer appearance-none rounded-[6.62px] border p-[8.27px] pr-[12px] text-xs leading-[18px] text-black placeholder:text-xs placeholder:leading-[18px] focus:ring-2",
//   inputClassName = "border-gray-medium-700 focus:ring-orange-medium placeholder:text-gray-medium-700 h-[46px] rounded-[6.62px] border p-[8.27px] text-xs leading-[18px] text-black placeholder:text-xs placeholder:leading-[18px] focus:ring-2 focus:outline-none",
// }) => {
//   return (
//     <div className="flex w-full flex-col gap-[12px]">
//       <label htmlFor={id} className={`${labelClassName}`}>
//         {label}
//       </label>

//       {isSelect && options.length > 0 ? (
//         <select
//           id={id}
//           value={value}
//           onChange={onChange}
//           required={required}
//           className={`${selectClassName}`}
//         >
//           {options.map(
//             (option: { label: string; value: string }, i: number) => (
//               <option key={i} value={option.value}>
//                 {option.label}
//               </option>
//             ),
//           )}
//         </select>
//       ) : (
//         <input
//           id={id}
//           type={type}
//           placeholder={placeholder}
//           value={value}
//           onChange={onChange}
//           required={required}
//           className={`${inputClassName}`}
//         />
//       )}
//     </div>
//   );
// };

export default LabelInput;
