import Btn from "./buttons/Btn";

function Search() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Search query submitted:", event);
    // Add logic to handle the search query, e.g., redirecting to a search results page
  };

  return (
    <form
      className="ml-[2px] flex items-center gap-2 md:w-[600px] md:gap-[19.41px]"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Find Your Dream Car"
        className="text-foundation-gray-lighter border-foundation-gray-lighter focus:outline-foundation-orange-normal h-[49px] w-full grow rounded-lg border-[1.39px] bg-transparent pt-[12.94px] pr-[22.19px] pb-[13.02px] pl-[22.19px] outline-[1.39px] placeholder:text-base placeholder:leading-[27.9px] focus:border-transparent min-[380px]:placeholder:text-[18.6px] md:w-fit"
        name="search-for-a-car"
      />
      {/* <button
        type="submit"
        className="bg-foundation-orange-normal text-foundation-gray-lighter hover:bg-foundation-orange-normal-hover h-[49px] basis-full rounded-lg p-2 transition-all duration-100 ease-linear md:grow-0 md:basis-[90px]"
      >
        {/* <img src="/icons/search-normal.svg" alt="search" /> */}
      {/* Search
      </button> */}
      <Btn
        type="submit"
        className="basis-[48px] rounded-lg p-2 sm:grow-0 sm:basis-[90px]"
        height="h-[49px]"
        width=""
        variant="for-bg-dark-without-border"
      >
        {/* <img src="/icons/search-normal.svg" alt="search" /> */}
        Search
      </Btn>
    </form>
  );
}

export default Search;
