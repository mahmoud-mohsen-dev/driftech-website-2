import { Link } from "react-router";

// function Anchor({
//   children,
//   href = "#",
//   isDefault = true,
// }: {
//   children: React.ReactNode;
//   href: string;
//   isDefault?: boolean;
// }) {
//   const styles = {
//     default:
//       "font-inter w-[230px] rounded-[9.47px] p-3 leading-[17.8px] font-medium duration-100 ease-linear transition-colors  flex items-center justify-center capitalize h-[53px] ",
//     defaultColors:
//       "bg-foundation-orange-normal text-neutral-0 hover:text-foundation-orange-normal hover:bg-neutral-0",
//     borderColors:
//       "text-neutral-0 border-foundation-orange-light border-[1.5px] bg-transparent hover:border-foundation-orange-normal hover:text-foundation-orange-normal",
//   };

//   return (
//     <Link
//       to={href}
//       className={`${styles.default} ${isDefault ? styles.defaultColors : styles.borderColors}`}
//     >
//       {children}
//     </Link>
//   );
// }

function Anchor({
  children,
  href = "#",
  variant = "default",
  className = "font-inter leading-[17.8px] font-medium capitalize rounded-[9.47px] p-3",
  width = "w-[230px]",
  height = "h-[53px]",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "default" | "outline-for-bg-light" | "outline-for-bg-dark";
  className?: string;
  width?: string;
  height?: string;
}) {
  const styles = {
    default:
      "duration-100 ease-linear transition-all flex items-center justify-center",
    defaultColors:
      "bg-foundation-orange-normal text-neutral-0 hover:scale-95 active:bg-foundation-orange-dark hover:bg-foundation-orange-normal-hover-2",
    outlineForBgLightColors:
      "text-foundation-orange-normal border-foundation-orange-normal border-[1.5px] bg-transparent hover:border-foundation-brown-medium hover:text-foundation-brown-medium",
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
    <Link
      to={href}
      className={`${width} ${height} ${styles.default} ${finalStyles} ${className}`}
    >
      {children}
    </Link>
  );
}

export default Anchor;
