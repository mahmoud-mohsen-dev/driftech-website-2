function ServicesAboutUsCard({
  title,
  description,
  iconSrc,
  iconAlt,
}: {
  title: string;
  description: string;
  iconSrc: string;
  iconAlt: string;
}) {
  return (
    <div className="font-poppins flex flex-col items-center justify-center gap-[1.75rem] text-center">
      <img src={iconSrc} alt={iconAlt} width={38} height={38} className="" />
      <div className="space-y-2.5">
        <h4 className="text-foundation-brown-normal text-[clamp(1.125rem,1.0536rem+0.3571vw,1.375rem)] leading-[clamp(1.5rem,1.3571rem+0.7143vw,2rem)] font-semibold">
          {title}
        </h4>
        <h5 className="text-foundation-gray-normal font-medium">
          {description}
        </h5>
      </div>
    </div>
  );
}

export default ServicesAboutUsCard;
