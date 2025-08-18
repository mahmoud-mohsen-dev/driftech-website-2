// import type { ButtonProps } from "../../../types/globalTypes";

// function Btn({
//   className = "p-[0.713125rem] text-[1.08375rem] leading-[1.06875rem] font-semibold w-[210px] bg-foundation-orange-normal h-[53px] text-neutral-0 rounded-[9.13px]",
//   children,
//   value,
//   type = "button",
//   onClick,
// }: ButtonProps) {
//   return (
//     <button
//       className={`font-inter active:bg-foundation-brown-medium cursor-pointer transition-all hover:bg-orange-500 ${className} `}
//       onClick={() => onClick()}
//       type={type}
//       value={value}
//     >
//       {children}
//     </button>
//   );
// }

function Btn({
  children,
  isDefault = true,
  handleClick,
  fontSytles = "font-inter leading-[17.8px] font-medium capitalize",
  width = "w-[210px]",
  height = "h-[53px]",
}: {
  children: React.ReactNode;
  isDefault?: boolean;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  fontSytles?: string;
  width?: string;
  height?: string;
}) {
  const styles = {
    default:
      "rounded-[9.47px] p-3 duration-100 ease-linear transition-colors flex items-center justify-center ",
    defaultColors:
      "bg-foundation-orange-normal text-neutral-0 hover:text-foundation-orange-normal hover:bg-neutral-0",
    borderColors:
      "text-neutral-0 border-foundation-orange-light border-[1.5px] bg-transparent hover:border-foundation-orange-normal hover:text-foundation-orange-normal",
  };

  return (
    <button
      onClick={handleClick}
      className={`${fontSytles} ${width} ${height} ${styles.default} ${isDefault ? styles.defaultColors : styles.borderColors}`}
    >
      {children}
    </button>
  );
}

export default Btn;
