import { Link } from "react-router";

function Btn({
  children,
  variant = "default",
  handleClick = () => {},
  className = "font-[inherit] leading-[17.8px] font-medium capitalize rounded-[9.47px] p-3 ",
  width = "w-[210px]",
  height = "h-[53px]",
  type = "button",
  to,
}: {
  children: React.ReactNode;
  variant?:
    | "default"
    | "outline-for-bg-light"
    | "outline-for-bg-dark"
    | "for-bg-dark-without-border";
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  width?: string;
  height?: string;
  type?: "button" | "submit" | "reset";
  to?: string;
}) {
  const styles = {
    default:
      "duration-100 ease-linear transition-all flex items-center justify-center ",
    defaultColors:
      "bg-foundation-orange-normal text-neutral-0 hover:text-foundation-orange-normal hover:bg-neutral-0 border border-transparent hover:border-foundation-orange-normal border-dashed ",
    outlineForBgLightColors:
      "text-foundation-orange-normal border-foundation-orange-normal border-[1.5px] bg-transparent hover:border-dashed",
    outlineForBgDarkColors:
      "text-neutral-0 border-foundation-orange-light border-[1.5px] bg-transparent hover:border-foundation-orange-normal hover:text-foundation-orange-normal",
    forBgDarkWithoutBorderColors:
      "text-neutral-0 bg-foundation-orange-normal hover:bg-foundation-orange-normal-hover active:bg-foundation-orange-normal",
  };

  let finalStyles = "";

  if (variant === "default") {
    finalStyles = styles.defaultColors;
  } else if (variant === "outline-for-bg-light") {
    finalStyles = styles.outlineForBgLightColors;
  } else if (variant === "outline-for-bg-dark") {
    finalStyles = styles.outlineForBgDarkColors;
  } else if (variant === "for-bg-dark-without-border") {
    finalStyles = styles.forBgDarkWithoutBorderColors;
  }

  if (to) {
    return (
      <Link
        to={to}
        className={`${width} ${height} ${styles.default} ${finalStyles} ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`${width} ${height} ${styles.default} ${finalStyles} ${className}`}
      type={type}
    >
      {children}
    </button>
  );
}

export default Btn;
