function CategoryItem({ text }: { text: string }) {
  return (
    <span className="text-foundation-brown-normal inline-block rounded-[8.46px] bg-neutral-100 p-[7px] text-[11px] leading-[17px] font-medium">
      {text}
    </span>
  );
}

function RadioItemLabel({
  img,
  title,
  categories,
}: {
  img: { src: string; alt: string };
  title: string;
  categories: string[];
}) {
  return (
    <div className="font-poppins flex w-full items-center gap-[18px]">
      <img src={img.src} alt={img.alt} />
      <div>
        <h4 className="leading-normal font-semibold text-black">{title}</h4>
        <div className="mt-3 flex flex-wrap items-center gap-[9px]">
          {categories.map((category) => (
            <CategoryItem key={category} text={category} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RadioItemLabel;
