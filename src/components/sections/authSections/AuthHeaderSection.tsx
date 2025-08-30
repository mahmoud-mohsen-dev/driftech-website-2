function AuthHeaderSection({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="min-h-[124.73px]">
      <h1 className="font-poppins text-foundation-brown-normal text-[36px] leading-[54px] font-medium lg:text-[42px] lg:leading-[63px]">
        {title}
      </h1>
      <h3 className="font-poppins text-foundation-gray-normal text-xl leading-[36px] font-medium lg:text-2xl">
        {description}
      </h3>
    </div>
  );
}

export default AuthHeaderSection;
