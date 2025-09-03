function AuthHeaderSection({
  title,
  description,
  variant,
}: {
  title: string;
  description: string;
  variant: "login" | "sign-up" | "forget-password" | "reset-password";
}) {
  return (
    <div
      className={`${variant === "reset-password" ? "md:min-h-[84px]" : "md:min-h-[124.73px]"}`}
    >
      <h1
        className={`font-poppins text-foundation-brown-normal ${variant === "reset-password" ? "text-[24px] leading-[32px] lg:text-[36px] lg:leading-[54px]" : "text-[36px] leading-[54px] lg:text-[42px] lg:leading-[63px]"} font-medium`}
      >
        {title}
      </h1>
      <h3
        className={`font-poppins text-foundation-gray-normal font-medium ${variant === "reset-password" ? "text-base leading-normal lg:text-xl lg:leading-[30px]" : "text-xl leading-[36px] lg:text-2xl"}`}
      >
        {description}
      </h3>
    </div>
  );
}

export default AuthHeaderSection;
