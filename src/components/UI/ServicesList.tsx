function ServicesList({
  children,
  image: { src = "", alt = "" },
}: {
  children: React.ReactNode;
  image: { src: string; alt: string };
}) {
  return (
    <li className="flex h-[38px] items-center gap-[9px]">
      <img src={src} alt={alt} width={38} height={38} />
      <span className="text-foundation-gray-normal-hover text-[18px] leading-[22px] font-normal">
        {children}
      </span>
    </li>
  );
}

export default ServicesList;
