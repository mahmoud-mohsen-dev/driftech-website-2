import type { ButtonProps } from "../../../types/globalTypes";

function Btn({
  className = "p-[0.713125rem] text-[1.08375rem] leading-[1.06875rem] font-semibold w-[210px] bg-foundation-orange-normal h-[53px] text-neutral-0 rounded-[9.13px]",
  children,
  value,
  type = "button",
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`font-inter active:bg-foundation-brown-medium cursor-pointer transition-all hover:bg-orange-500 ${className} `}
      onClick={() => onClick()}
      type={type}
      value={value}
    >
      {children}
    </button>
  );
}

export default Btn;
