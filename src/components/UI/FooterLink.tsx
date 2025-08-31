import { Link } from "react-router";

function FooterLink({
  children,
  href = "#",
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <li>
      <Link
        to={href}
        className="font-poppins text-[13px] text-neutral-50 capitalize transition-all duration-100 ease-in hover:text-neutral-300 hover:underline"
      >
        {children}
      </Link>
    </li>
  );
}

export default FooterLink;
