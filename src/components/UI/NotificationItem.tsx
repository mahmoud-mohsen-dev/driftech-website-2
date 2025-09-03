function NotificationItem({
  title,
  description,
  date,
  isNew,
}: {
  title: string;
  description: string;
  date: string;
  isNew: boolean;
}) {
  return (
    <div className="font-poppins space-y-3">
      <div className="flex items-center justify-between">
        <h6 className="text-foundation-brown-normal leading-normal font-semibold">
          {title}
        </h6>
        {isNew && (
          <span className="bg-foundation-orange-normal text-neutral-0 flex h-[16.21px] w-[46.19px] items-center justify-center rounded-[6.48px] text-[8.1px] leading-[12px] font-medium">
            New
          </span>
        )}
      </div>
      <div className="text-foundation-gray-normal text-[11.35px] leading-[17px] font-medium">
        {description}
      </div>
      <div className="flex h-[16px] items-center gap-1">
        <img
          src="/icons/clock-gray-normal.svg"
          alt="clock"
          width={16}
          height={16}
        />
        <span className="text-foundation-gray-normal text-[9.72px] leading-none font-normal">
          {date}
        </span>
      </div>
    </div>
  );
}

export default NotificationItem;
