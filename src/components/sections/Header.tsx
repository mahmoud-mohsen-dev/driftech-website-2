import NavLink from "../UI/NavLink";

function Header() {
  return (
    <header className="font-poppins shadow-custom fixed top-[59px] left-1/2 z-999 flex h-[75px] w-full max-w-[1221px] -translate-1/2 items-center justify-between gap-32 rounded-2xl bg-white px-8 py-4 font-medium">
      <img src="/logos/Logo-1.svg" alt="Drifttech logo" />

      <nav>
        <ul className="flex items-center gap-[27.4px] leading-[30px] capitalize">
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">Cars</NavLink>
          <NavLink href="#">My Finance Status</NavLink>
          <NavLink href="#">About</NavLink>
          <NavLink href="#">Contact</NavLink>
          <NavLink href="#">Vlogs</NavLink>
        </ul>
      </nav>

      <div className="flex items-center gap-1.5">
        <a
          href="#login"
          className="text-foundation-brown-normal hover:text-orange-medium px-6 py-3 leading-6 capitalize underline transition duration-200 ease-linear"
        >
          Log In
        </a>
        <a
          href="#create-account"
          className="text-neutral-0 bg-foundation-orange-normal hover:bg-neutral-0 hover:text-foundation-orange-normal rounded-lg p-2.5 capitalize transition duration-200 ease-in"
        >
          Create Account
        </a>
      </div>
    </header>
  );
}

export default Header;
