import { Link, NavLink, useNavigate } from "react-router";
import MyNavLink from "../UI/MyNavLink";
import { useEffect, useRef, useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { getCookie, removeCookie } from "../../helpers/cookieHelpers";
import NotificationItem from "../UI/NotificationItem";
import { v4 } from "uuid";
import axios from "../../api/axios";
import { useToast } from "../../hooks/useToast";

const LOG_OUT = "api/auth/logout";

const CarsBaseURL = import.meta.env.VITE_CARS_URL;

function Header() {
  const [isMenuOnSmallScreensOpen, setIsMenuOnSmallScreensOpen] =
    useState(false);
  const [isNotificationMenuOpen, setIsNotificationMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  const { success, error, loading } = useToast();
  const navigate = useNavigate();

  const notificationRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  const hasNotification = true;

  useEffect(() => {
    const token = getCookie("token");
    if (token) {
      setIsUserSignedIn(true);
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setIsNotificationMenuOpen(false);
      }

      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsProfileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSignOut = async () => {
    try {
      loading({ text: "Signing out, please wait...", isLoading: true });
      setIsProfileMenuOpen(false);

      const token = getCookie("token");
      if (!token) return;

      const response = await axios.post(
        LOG_OUT,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );

      // console.log(response);
      // console.log(response?.data?.message);

      if (response?.data?.message !== "تم تسجيل الخروج بنجاح.") {
        error("Something went wrong");
        return;
      }

      removeCookie("token");
      setIsUserSignedIn(false);
      success("You have successfully signed out!");

      setTimeout(() => {
        navigate("/login");
      }, 500);
    } catch (e: any) {
      console.error(e);
      console.error(e?.response?.data?.message ?? "Something went wrong");
      error("Something went wrong");
      removeCookie("token");
      setIsUserSignedIn(false);
    } finally {
      loading({ isLoading: false });
    }
  };

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
              <MyNavLink
                to={CarsBaseURL ?? "/"}
                hasUnderLineBorder={true}
                target="_blank"
              >
                Cars
              </MyNavLink>
              <MyNavLink to="/finance" hasUnderLineBorder={true}>
                Finance
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

          {isUserSignedIn ? (
            // Profile and Notification Buttons
            <div className="hidden xl:flex xl:items-center xl:gap-4">
              <div className="relative" ref={notificationRef}>
                <button
                  className="relative h-8 w-8"
                  onClick={() => {
                    setIsNotificationMenuOpen(!isNotificationMenuOpen);
                  }}
                  onBlur={() => {
                    setIsNotificationMenuOpen(false);
                  }}
                >
                  {hasNotification && (
                    <span className="bg-foundation-red-medium absolute top-1 right-1 z-10 h-2 w-2 rounded-full"></span>
                  )}

                  <img
                    src="/icons/notification-bill.svg"
                    alt="notification icon"
                    width={32}
                    height={32}
                  />
                </button>
                {/* Notification Menu */}
                {isNotificationMenuOpen && (
                  <>
                    <img
                      src="/icons/polygon.svg"
                      alt="polygon"
                      width={24.44}
                      height={20}
                      className="absolute top-full left-1/2 h-[40px] min-w-[46px] -translate-x-1/2 translate-y-[16px] object-cover"
                    />
                    <div className="shadow-light-gray-2 absolute top-full right-0 hidden w-fit min-w-[350px] translate-x-2.5 translate-y-[48px] space-y-3 rounded-lg bg-white px-4 py-9 sm:block">
                      <NotificationItem
                        key={v4()}
                        title="Password changer"
                        description="Your data is safe with us – our hiring app is built with top-notch security to protect your privacy"
                        date="4 June 2025 | 10:03 PM"
                        isNew={true}
                      />
                      <NotificationItem
                        key={v4()}
                        title="Password changer"
                        description="Your data is safe with us – our hiring app is built with top-notch security to protect your privacy"
                        date="4 June 2025 | 10:03 PM"
                        isNew={true}
                      />
                      <NotificationItem
                        key={v4()}
                        title="Password changer"
                        description="Your data is safe with us – our hiring app is built with top-notch security to protect your privacy"
                        date="4 June 2025 | 10:03 PM"
                        isNew={false}
                      />
                    </div>
                  </>
                )}
              </div>
              <div className="font-poppins relative" ref={profileRef}>
                <button
                  className="relative h-8 w-8"
                  onClick={() => {
                    setIsProfileMenuOpen(!isProfileMenuOpen);
                  }}
                >
                  <img
                    src="/icons/profile.svg"
                    alt="profile icon"
                    width={32}
                    height={32}
                  />
                </button>
                {isProfileMenuOpen && (
                  <>
                    <img
                      src="/icons/polygon.svg"
                      alt="polygon"
                      width={24.44}
                      height={20}
                      className="absolute top-full left-1/2 h-[40px] min-w-[46px] -translate-x-1/2 translate-y-[16px] object-cover"
                    />
                    <div
                      className="shadow-light-gray-2 absolute top-full right-0 hidden w-fit min-w-[215px] translate-x-2.5 translate-y-[48px] space-y-3 rounded-lg bg-white px-[0.875rem] py-[1.125rem] sm:block"
                      onBlur={() => {
                        setIsProfileMenuOpen(false);
                      }}
                    >
                      <Link
                        to="/profile"
                        className="text-foundation-brown-normal block w-full text-sm text-[clamp(0.75rem,0.5vw+0.625rem,0.875rem)] leading-normal font-semibold"
                      >
                        Edit Profile
                      </Link>
                      <button
                        className="text-foundation-red-medium w-full text-start text-sm text-[clamp(0.75rem,0.5vw+0.625rem,0.875rem)] leading-normal font-semibold"
                        onClick={handleSignOut}
                      >
                        Sign Out
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          ) : (
            //  Desktop Auth Buttons
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
          )}

          <div className="relative block xl:hidden">
            {/* Burger Button - only on small screens */}
            <button
              className="flex items-center justify-center"
              onClick={() =>
                setIsMenuOnSmallScreensOpen(!isMenuOnSmallScreensOpen)
              }
              // onBlur={() => {
              //   setIsMenuOnSmallScreensOpen(false);
              // }}
            >
              {isMenuOnSmallScreensOpen ? (
                <HiOutlineX size={24} />
              ) : (
                <HiOutlineMenu size={24} />
              )}
            </button>
            {/* Mobile Menu */}
            {isMenuOnSmallScreensOpen && (
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
                          setIsMenuOnSmallScreensOpen(false);
                          navigate("/");
                        }}
                      >
                        Home
                      </MyNavLink>
                      <MyNavLink
                        to={CarsBaseURL ?? "/"}
                        onClick={() => {
                          setIsMenuOnSmallScreensOpen(false);
                          // navigate(CarsBaseURL ?? "/");
                        }}
                        target="_blank"
                      >
                        Cars
                      </MyNavLink>
                      <MyNavLink
                        to="/finance"
                        onClick={() => {
                          setIsMenuOnSmallScreensOpen(false);
                          navigate("/finance");
                        }}
                      >
                        Finance
                      </MyNavLink>
                      <MyNavLink
                        to="/about-us"
                        onClick={() => {
                          setIsMenuOnSmallScreensOpen(false);
                          navigate("/about-us");
                        }}
                      >
                        About
                      </MyNavLink>
                      <MyNavLink
                        to="/contact-us"
                        onClick={() => {
                          setIsMenuOnSmallScreensOpen(false);
                          navigate("/contact-us");
                        }}
                      >
                        Contact Us
                      </MyNavLink>
                      <MyNavLink
                        to="/vlogs"
                        onClick={() => {
                          setIsMenuOnSmallScreensOpen(false);
                          navigate("/vlogs");
                        }}
                      >
                        Vlogs
                      </MyNavLink>

                      {isUserSignedIn ? (
                        <>
                          <MyNavLink
                            to="/profile"
                            onClick={() => {
                              setIsMenuOnSmallScreensOpen(false);
                              navigate("/profile");
                            }}
                          >
                            Profile
                          </MyNavLink>
                          <button
                            className="text-foundation-red-medium w-full text-start text-[clamp(0.75rem,0.5vw+0.625rem,0.875rem)] leading-normal font-semibold"
                            onClick={handleSignOut}
                          >
                            Sign Out
                          </button>
                        </>
                      ) : (
                        <>
                          <MyNavLink
                            to="/login"
                            onClick={() => {
                              setIsMenuOnSmallScreensOpen(false);
                              navigate("/login");
                            }}
                          >
                            Login
                          </MyNavLink>
                          <Link
                            to="/sign-up"
                            className="text-neutral-0 bg-foundation-orange-normal hover:bg-neutral-0 hover:text-foundation-orange-normal block w-full rounded-lg p-2.5 text-center capitalize transition duration-200 ease-in"
                            onClick={() => {
                              setIsMenuOnSmallScreensOpen(false);
                              navigate("/sign-up");
                            }}
                          >
                            Create Account
                          </Link>
                        </>
                      )}
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
