import { v4 } from "uuid";

function ProgressItem({ activeColor }: { activeColor: string }) {
  return (
    <div className={`${activeColor} h-2 w-full rounded-[5.49px] md:h-3`}></div>
  );
}

function CustomProgress({
  steps,
  currentIndex,
}: {
  steps: number;
  currentIndex: number;
}) {
  const arrSteps = Array.from(Array(steps).keys());

  return (
    <div className="flex w-full items-center justify-between gap-3">
      {arrSteps.map((_, index) => {
        const isActive = index + 1 <= currentIndex;

        const activeColor = isActive ? `bg-[#e73201]` : `bg-[#E5E7EB]`;

        return <ProgressItem key={v4()} activeColor={activeColor} />;
      })}
    </div>
  );
}

export default CustomProgress;
