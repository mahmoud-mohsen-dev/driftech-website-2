import { v4 } from "uuid";

function GetInTouchInfoItemList({
  title,
  listItems,
  iconSrc,
  iconAlt,
}: {
  title: string;
  listItems: string[];
  iconSrc: string;
  iconAlt: string;
}) {
  return (
    <div className="shadow-black-light flex flex-col items-center gap-5 rounded-xl px-8 py-4 text-center sm:flex-row sm:text-start">
      <div className="shadow-black-light flex h-[87px] w-[87px] items-center justify-center rounded-full bg-neutral-200">
        <img src={iconSrc} alt={iconAlt} />
      </div>
      <div>
        <h3 className="text-foundation-brown-normal text-[clamp(0.875rem,0.5vw+0.75rem,1rem)] leading-[clamp(1.25rem,0.5vw+1rem,1.5rem)] font-semibold">
          {title}
        </h3>
        <ul className="mt-1 list-inside list-disc space-y-1 pl-3">
          {listItems.map((item) => (
            <li
              key={v4()}
              className="text-foundation-brown-normal text-[clamp(0.875rem,0.5vw+0.75rem,1rem)] leading-[clamp(1.25rem,0.5vw+1rem,1.5rem)] font-normal"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default GetInTouchInfoItemList;
