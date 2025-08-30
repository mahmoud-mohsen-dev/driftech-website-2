import { Link, NavLink } from "react-router";
import MyNavLink from "../UI/MyNavLink";

function Header() {
  return (
    // <header className="font-poppins shadow-custom fixed top-[59px] left-1/2 z-999 mx-auto w-[calc(100%-2rem)] -translate-1/2 rounded-2xl bg-white font-medium sm:max-w-[38rem] md:max-w-[46rem] lg:max-w-[62.75rem] xl:max-w-[78.75rem] 2xl:max-w-[1516px]">
    <header className="font-poppins shadow-custom fixed top-[59px] left-1/2 z-999 container mx-auto -translate-1/2 rounded-2xl bg-white font-medium">
      <div className="flex h-[75px] items-center justify-between gap-5 px-8 py-4">
        <Link to="/">
          <img src="/logos/Logo-1.svg" alt="Drifttech logo" />
        </Link>

        <nav>
          <ul className="hidden items-center gap-[27.4px] leading-[30px] capitalize xl:flex">
            <MyNavLink to="/">Home</MyNavLink>
            <MyNavLink to="/cars">Cars</MyNavLink>
            <MyNavLink to="/my-finance-status">My Finance Status</MyNavLink>
            <MyNavLink to="/about">About</MyNavLink>
            <MyNavLink to="/contact">Contact Us</MyNavLink>
            <MyNavLink to="/vlogs">Vlogs</MyNavLink>
          </ul>
        </nav>

        <div className="hidden xl:flex xl:items-center xl:gap-1.5">
          <NavLink
            to={"/login"}
            className={({ isActive }) =>
              `text-foundation-brown-normal hover:text-orange-medium px-6 py-3 leading-6 capitalize underline transition duration-200 ease-linear ${isActive ? "text-orange-medium" : "text-black"}`
            }
          >
            Log In
          </NavLink>
          <a
            href="/sign-up"
            className="text-neutral-0 bg-foundation-orange-normal hover:bg-neutral-0 hover:text-foundation-orange-normal rounded-lg p-2.5 capitalize transition duration-200 ease-in"
          >
            Create Account
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
