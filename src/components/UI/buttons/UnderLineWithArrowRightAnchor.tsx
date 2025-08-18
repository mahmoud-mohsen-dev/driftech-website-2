interface UnderLineWithArrowRightAnchorProps {
  className?: string;
  children: React.ReactNode;
  href: string;
  image: {
    src?: string;
    alt?: string;
  };
}

function UnderLineWithArrowRightAnchor({
  className = "text-foundation-orange-normal font-inter leading-[14px] text-[13.71px] underline decoration-foundation-orange-normal font-semibold",
  children,
  image: { src = "", alt = "" },
  href,
}: UnderLineWithArrowRightAnchorProps) {
  return (
    <a
      className={`font-inter active:bg-foundation-brown-medium active:decoration-foundation-brown-medium hover:decoration-foundation-brown-medium flex h-[40px] cursor-pointer items-center gap-[9.02px] transition-all hover:text-orange-500 ${className} `}
      href={href}
    >
      <span>{children}</span>
      <img src={src} alt={alt} width={20} height={20} />
    </a>
  );
}

export default UnderLineWithArrowRightAnchor;
