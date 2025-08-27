function Loader() {
  return (
    <div className="mx-auto flex w-fit flex-col items-center justify-center">
      <img
        src="/icons/loading.svg"
        alt="loader icon"
        width={75.29}
        height={75.29}
        className="animate-spin"
      />
      <h3 className="text-foundation-gray-normal font-inter mt-[1.125rem] text-[1.3125rem] leading-[1.6875rem] font-medium">
        Loading...
      </h3>
    </div>
  );
}

export default Loader;
