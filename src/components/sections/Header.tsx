import { Link, NavLink, useNavigate } from "react-router";
import MyNavLink from "../UI/MyNavLink";
import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <header className="font-poppins shadow-custom fixed top-[41px] left-1/2 z-999 container mx-auto -translate-1/2 rounded-lg bg-white font-medium md:top-[59px] xl:rounded-2xl">
        <div className="relative flex h-[42px] items-center justify-between gap-5 px-4 py-[9px] md:h-[75px] md:px-6 xl:px-8">
          <Link to="/">
            <img
              src="/logos/Logo-1.svg"
              alt="Drifttech logo"
              height={32}
              // width={60}
              className="h-[40px] md:h-[60px]"
            />
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
              <MyNavLink to="/vlogs" hasUnderLineBorder={true}>
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
              {isOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
            </button>
            {/* Mobile Menu */}
            {isOpen && (
              <>
                <img
                  src="/icons/polygon.svg"
                  alt="polygon"
                  width={24.44}
                  height={20}
                  className="absolute top-full left-1/2 h-[40px] min-w-[46px] -translate-x-1/2 translate-y-[8px] object-cover"
                />
                <div className="shadow-light-gray-2 absolute top-full right-0 w-fit min-w-[200px] translate-x-2.5 translate-y-[40px] rounded-lg bg-white xl:hidden">
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
                        to="/vlogs"
                        onClick={() => {
                          setIsOpen(false);
                          navigate("/vlogs");
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
