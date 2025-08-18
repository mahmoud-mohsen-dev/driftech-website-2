function Anchor({
  children,
  href = "#",
  isDefault = true,
}: {
  children: React.ReactNode;
  href: string;
  isDefault?: boolean;
}) {
  const styles = {
    default:
      "font-inter w-[230px] rounded-[9.47px] p-3 leading-[17.8px] font-medium duration-100 ease-linear transition-colors  flex items-center justify-center capitalize h-[53px] ",
    defaultColors:
      "bg-foundation-orange-normal text-neutral-0 hover:text-foundation-orange-normal hover:bg-neutral-0",
    borderColors:
      "text-neutral-0 border-foundation-orange-light border-[1.5px] bg-transparent hover:border-foundation-orange-normal hover:text-foundation-orange-normal",
  };

  return (
    <a
      href={href}
      className={`${styles.default} ${isDefault ? styles.defaultColors : styles.borderColors}`}
    >
      {children}
    </a>
  );
}

export default Anchor;
