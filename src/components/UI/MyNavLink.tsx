import { NavLink } from "react-router";

function MyNavLink({
  children,
  to = "#",
}: {
  children: React.ReactNode;
  to: string;
}) {
  return (
    <li className="menu-item">
      <NavLink
        to={to}
        className={({ isActive }) =>
          `hover:text-foundation-orange-normal relative inline-block min-h-[30px] text-black transition-all duration-200 ease-linear ${
            isActive ? "text-orange-medium active" : "text-black"
          }`
        }
      >
        {children}

        <span className="bg-orange-medium absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-200 ease-linear"></span>
      </NavLink>
    </li>
  );
}

export default MyNavLink;
