import { Link } from "react-router";

function AuthFooterSection({
  label,
  linkHref,
  linkText,
}: {
  label: string;
  linkHref: string;
  linkText: string;
}) {
  return (
    <div>
      <p className="font-poppins text-foundation-gray-normal mb-10 text-center text-[20px] leading-[40px] font-medium">
        {label}
        <Link
          to={linkHref}
          className="text-foundation-orange-normal ml-1.5 capitalize underline hover:underline"
        >
          {linkText}
        </Link>
      </p>
    </div>
  );
}

export default AuthFooterSection;
