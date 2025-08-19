function FeaturesList({
  children,
  image: { src = "", alt = "" },
  listStyle = "h-[38px] gap-[9px]",
  spanStyle = "text-foundation-gray-normal-hover text-[18px] leading-[22px] font-normal",
  imageStyle = { width: 38, height: 38 },
}: {
  children: React.ReactNode;
  image: { src: string; alt: string };
  listStyle?: string;
  spanStyle?: string;
  imageStyle?: { width: number; height: number };
}) {
  return (
    <li className={`flex items-center ${listStyle}`}>
      <img
        src={src}
        alt={alt}
        width={imageStyle.width}
        height={imageStyle.height}
        // className={`${imageStyle.width} ${imageStyle.height}`}
      />
      <span className={`${spanStyle}`}>{children}</span>
    </li>
  );
}

export default FeaturesList;
