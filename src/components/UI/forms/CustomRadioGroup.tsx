import { useState } from "react";
import { v4 } from "uuid";

type Option = {
  label: React.ReactNode;
  value: string;
};

function RadioItem({
  opt,
  selected,
  setSelected,
  className,
}: {
  opt: { label: React.ReactNode; value: string | number };
  selected: string | number;
  setSelected: React.Dispatch<React.SetStateAction<string | number>>;
  className: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <label
      key={opt.value}
      className={`flex cursor-pointer items-center justify-between rounded-lg border-2 bg-white transition ${selected === opt.value ? "border-foundation-red-normal" : isHovered ? "border-foundation-orange-normal-hover-2" : "border-foundation-gray-medium"} ${className}`}
      onMouseOver={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <span
        className={`${selected === opt.value ? "text-foundation-red-normal" : isHovered ? "text-foundation-orange-normal-hover-2" : "text-foundation-gray-medium"} w-[calc(100%-35px)]`}
      >
        {opt.label}
      </span>

      {/* Radio circle */}
      <span
        className={`relative flex h-[18.1px] w-[18.1px] items-center justify-center rounded-full border-2 lg:h-[31.5px] lg:w-[31.5px] ${selected === opt.value ? "border-foundation-red-normal" : isHovered ? "border-foundation-orange-normal-hover-2" : "border-foundation-gray-medium"}`}
      >
        {selected === opt.value && (
          <span className="bg-foundation-red-normal h-[11.31px] w-[11.31px] rounded-full lg:h-[19.69px] lg:w-[19.69px]"></span>
        )}
        {selected !== opt.value && (
          <span
            className={`${isHovered ? "bg-foundation-orange-normal-hover-2" : "bg-foundation-gray-medium"} h-[11.31px] w-[11.31px] rounded-full lg:h-[19.69px] lg:w-[19.69px]`}
          ></span>
        )}
      </span>

      <input
        type="radio"
        name="custom-radio"
        value={opt.value}
        checked={selected === opt.value}
        onChange={() => setSelected(opt.value)}
        className="hidden"
      />
    </label>
  );
}

export default function CustomRadioGroup({
  options,
  radioItemClassName = "px-2 py-4 w-full font-medium text-[16px] leading-[19px] text-foundation-gray-normal",
  groupClassName = "font-inter",
}: {
  options: Option[];
  radioItemClassName?: string;
  groupClassName?: string;
}) {
  const [selected, setSelected] = useState<string | number>("");

  return (
    <div className={`${groupClassName}`}>
      {options.map((opt) => (
        <RadioItem
          key={v4()}
          opt={opt}
          selected={selected}
          setSelected={setSelected}
          className={radioItemClassName}
        />
      ))}
    </div>
  );
}
