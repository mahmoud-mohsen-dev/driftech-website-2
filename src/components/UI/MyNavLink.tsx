import { NavLink } from "react-router";

function MyNavLink({
  children,
  to = "#",
  onClick = () => {},
  hasUnderLineBorder = false,
  target = "_self",
}: {
  children: React.ReactNode;
  to: string;
  onClick?: () => void;
  hasUnderLineBorder?: boolean;
  target?: "_self" | "_blank";
}) {
  const isExternal = to.startsWith("http");

  const commonClasses =
    "hover:text-foundation-orange-normal inline-block min-h-full text-black transition-all duration-200 ease-linear";

  return (
    <li className="menu-item relative min-h-[30px]">
      {isExternal ? (
        <a
          href={to}
          target={target}
          rel="noopener noreferrer"
          onClick={onClick}
          className={commonClasses}
        >
          {children}
        </a>
      ) : (
        <NavLink
          to={to}
          className={({ isActive }) =>
            // `hover:text-foundation-orange-normal inline-block min-h-full text-black transition-all duration-200 ease-linear ${
            //   isActive ? "text-orange-medium active" : "text-black"
            // } `
            `${commonClasses} ${isActive ? "text-orange-medium active" : "text-black"}`
          }
          onClick={onClick}
          onTouchStart={onClick}
          target={target}
        >
          {children}
        </NavLink>
      )}
      {hasUnderLineBorder && (
        <span className="bg-orange-medium absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-200 ease-linear" />
      )}
    </li>
  );
}

export default MyNavLink;
