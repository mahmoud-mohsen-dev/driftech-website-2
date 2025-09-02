import { HiOutlineX } from "react-icons/hi";

function StoredAnswer({
  handleDelete,
  children,
}: {
  handleDelete: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      className="text-foundation-gray-normal border-foundation-gray-normal font-poppins flex h-6 w-fit items-center justify-between gap-1.5 rounded-full border p-1.5 text-[clamp(0.59rem,0.4729rem+0.5857vw,1rem)] leading-normal font-medium md:h-10 md:gap-2.5 md:p-2.5"
      onClick={handleDelete}
    >
      <span>{children}</span>
      <span>
        <HiOutlineX className="h-[0.59rem] w-[0.59rem] md:h-4 md:w-4" />
      </span>
    </button>
  );
}

export default StoredAnswer;
