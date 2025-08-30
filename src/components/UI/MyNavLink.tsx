import { NavLink } from "react-router";

function MyNavLink({
  children,
  to = "#",
}: {
  children: React.ReactNode;
  to: string;
}) {
  return (
    <li className="menu-item relative min-h-[30px]">
      <NavLink
        to={to}
        className={({ isActive }) =>
          `hover:text-foundation-orange-normal inline-block min-h-full text-black transition-all duration-200 ease-linear ${
            isActive ? "text-orange-medium active" : "text-black"
          }`
        }
      >
        {children}
      </NavLink>
      <span className="bg-orange-medium absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-200 ease-linear" />
    </li>
  );
}

export default MyNavLink;
