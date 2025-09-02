import { Link, NavLink, useNavigate } from "react-router";
import MyNavLink from "../UI/MyNavLink";
import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <header className="font-poppins shadow-custom fixed top-[59px] left-1/2 z-999 container mx-auto -translate-1/2 rounded-2xl bg-white font-medium">
        <div className="relative flex h-[75px] items-center justify-between gap-5 px-4 py-4 xl:px-8">
          <Link to="/">
            <img src="/logos/Logo-1.svg" alt="Drifttech logo" />
          </Link>

          {/* Desktop Nav */}
          <nav className="">
            <ul className="hidden items-center gap-[27.4px] leading-[30px] capitalize xl:flex">
              <MyNavLink to="/" hasUnderLineBorder={true}>
                Home
              </MyNavLink>
              <MyNavLink to="/cars" hasUnderLineBorder={true}>
                Cars
              </MyNavLink>
              <MyNavLink to="/my-finance-status" hasUnderLineBorder={true}>
                My Finance Status
              </MyNavLink>
              <MyNavLink to="/about-us" hasUnderLineBorder={true}>
                About
              </MyNavLink>
              <MyNavLink to="/contact-us" hasUnderLineBorder={true}>
                Contact Us
              </MyNavLink>
              <MyNavLink to="/cars-vlogs" hasUnderLineBorder={true}>
                Vlogs
              </MyNavLink>
            </ul>
          </nav>

          {/* Desktop Auth Buttons */}
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

          <div className="relative block xl:hidden">
            {/* Burger Button - only on small screens */}
            <button
              className="flex items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
            </button>
            {/* Mobile Menu */}
            {isOpen && (
              <>
                <img
                  src="/icons/polygon.svg"
                  alt="polygon"
                  width={24.44}
                  height={20}
                  className="absolute top-full left-1/2 h-[40px] min-w-[46px] -translate-x-1/2 translate-y-[22px] object-cover"
                />
                <div className="shadow-light-gray-2 absolute top-full right-0 w-fit min-w-[200px] translate-x-2.5 translate-y-[52px] rounded-lg bg-white xl:hidden">
                  <nav className="flex flex-col items-start gap-4 px-5 py-5">
                    <ul className="flex w-full flex-col gap-3">
                      <MyNavLink
                        to="/"
                        onClick={() => {
                          setIsOpen(false);
                          navigate("/");
                        }}
                      >
                        Home
                      </MyNavLink>
                      <MyNavLink
                        to="/cars"
                        onClick={() => {
                          setIsOpen(false);
                          navigate("/cars");
                        }}
                      >
                        Cars
                      </MyNavLink>
                      <MyNavLink
                        to="/my-finance-status"
                        onClick={() => {
                          setIsOpen(false);
                          navigate("/my-finance-status");
                        }}
                      >
                        My Finance Status
                      </MyNavLink>
                      <MyNavLink
                        to="/about-us"
                        onClick={() => {
                          setIsOpen(false);
                          navigate("/about-us");
                        }}
                      >
                        About
                      </MyNavLink>
                      <MyNavLink
                        to="/contact-us"
                        onClick={() => {
                          setIsOpen(false);
                          navigate("/contact-us");
                        }}
                      >
                        Contact Us
                      </MyNavLink>
                      <MyNavLink
                        to="/cars-vlogs"
                        onClick={() => {
                          setIsOpen(false);
                          navigate("/cars-vlogs");
                        }}
                      >
                        Vlogs
                      </MyNavLink>
                      <MyNavLink
                        to="/login"
                        onClick={() => {
                          setIsOpen(false);
                          navigate("/login");
                        }}
                      >
                        Login
                      </MyNavLink>
                      <Link
                        to="/sign-up"
                        className="text-neutral-0 bg-foundation-orange-normal hover:bg-neutral-0 hover:text-foundation-orange-normal block w-full rounded-lg p-2.5 text-center capitalize transition duration-200 ease-in"
                        onClick={() => {
                          setIsOpen(false);
                          navigate("/sign-up");
                        }}
                      >
                        Create Account
                      </Link>
                    </ul>
                  </nav>
                </div>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
