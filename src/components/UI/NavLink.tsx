function NavLink({
  children,
  href = "#",
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <li className="hover:text-orange-medium text-black transition duration-200 ease-linear">
      <a href={href}>{children}</a>
    </li>
  );
}

export default NavLink;
