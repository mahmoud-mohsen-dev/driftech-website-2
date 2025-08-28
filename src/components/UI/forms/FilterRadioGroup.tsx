import { useRef, useState } from "react";

export default function FilterRadioGroup() {
  const [selected, setSelected] = useState("all");
  const containerRef = useRef<HTMLDivElement | null>(null);

  const options = [
    { label: "All", value: "all" },
    { label: "2500,000 - 900,000", value: "2500,000" },
    { label: "900,001 - 1,000,000", value: "900,001" },
    { label: "1,000,001 - 1,500,000", value: "1,000,001" },
    { label: "1,500,001 - 2,000,000", value: "1,500,001" },
    { label: "2,000,001 - 3,000,000", value: "2,000,001" },
    { label: "3,000,001 - 4,000,000", value: "3,000,001" },
    { label: "4,000,001 - 5,000,000", value: "4,000,001" },
    { label: "5,000,001 - 6,000,000", value: "5,000,001" },
  ];

  // Mouse drag scroll state
  let isDown = false;
  let startX: number;
  let scrollLeft: number;

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDown = true;
    if (containerRef.current) {
      startX = e.pageX - containerRef.current.offsetLeft;
      scrollLeft = containerRef.current.scrollLeft;
    }
  };

  const handleMouseLeaveOrUp = () => {
    isDown = false;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDown || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // drag speed
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      className="flex w-full items-center gap-4 overflow-hidden"
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeaveOrUp}
      onMouseUp={handleMouseLeaveOrUp}
      onMouseMove={handleMouseMove}
    >
      {options.map((option, i) => (
        <label
          key={option.value}
          className={`min-w-fit cursor-pointer rounded-lg px-4 py-2 text-sm font-medium transition select-none ${
            selected === option.value
              ? "bg-foundation-orange-normal text-neutral-0 border border-transparent"
              : "bg-neutral-0 border-foundation-gray-normal text-foundation-gray-normal activer:border-foundation-orange-normal active:text-foundation-orange-normal hover:border-orange-opacity-60 hover:text-orange-opacity-60 border"
          }`}
        >
          <input
            type="radio"
            name="filter"
            value={option.value + i}
            checked={selected === option.value}
            onChange={() => setSelected(option.value)}
            className="hidden"
          />
          {option.label}
        </label>
      ))}
    </div>
  );
}
