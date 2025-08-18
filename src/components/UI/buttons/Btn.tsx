function Btn({
  children,
  variant = "default",
  handleClick,
  className = "font-inter leading-[17.8px] font-medium capitalize rounded-[9.47px] p-3 ",
  width = "w-[210px]",
  height = "h-[53px]",
}: {
  children: React.ReactNode;
  variant?: "default" | "outline-for-bg-light" | "outline-for-bg-dark";
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  width?: string;
  height?: string;
}) {
  const styles = {
    default:
      "duration-100 ease-linear transition-colors flex items-center justify-center ",
    defaultColors:
      "bg-foundation-orange-normal text-neutral-0 hover:text-foundation-orange-normal hover:bg-neutral-0",
    outlineForBgLightColors:
      "text-foundation-orange-normal border-foundation-orange-normal border-[1.5px] bg-transparent hover:border-foundation-brown-medium hover:text-foundation-brown-medium ",
    outlineForBgDarkColors:
      "text-neutral-0 border-foundation-orange-light border-[1.5px] bg-transparent hover:border-foundation-orange-normal hover:text-foundation-orange-normal",
  };

  let finalStyles = "";

  if (variant === "default") {
    finalStyles = styles.defaultColors;
  } else if (variant === "outline-for-bg-light") {
    finalStyles = styles.outlineForBgLightColors;
  } else if (variant === "outline-for-bg-dark") {
    finalStyles = styles.outlineForBgDarkColors;
  }

  return (
    <button
      onClick={handleClick}
      className={`${width} ${height} ${styles.default} ${finalStyles} ${className}`}
    >
      {children}
    </button>
  );
}

export default Btn;
