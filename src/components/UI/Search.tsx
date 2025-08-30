function Search() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Search query submitted:", event);
    // Add logic to handle the search query, e.g., redirecting to a search results page
  };

  return (
    <form
      className="ml-[2px] flex flex-wrap items-center gap-[19.41px] md:flex-nowrap lg:w-[600px]"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Find Your Dream Car"
        className="text-foundation-gray-lighter border-foundation-gray-lighter focus:outline-foundation-orange-normal h-[49px] w-full grow rounded-lg border-[1.39px] bg-transparent pt-[12.94px] pr-[22.19px] pb-[13.02px] pl-[22.19px] outline-[1.39px] placeholder:text-[18.6px] placeholder:leading-[27.9px] focus:border-transparent md:w-fit"
        name="search-for-a-car"
      />
      <button
        type="submit"
        className="bg-foundation-orange-normal text-foundation-gray-lighter h-[49px] basis-full rounded-lg p-2 hover:bg-orange-600 md:grow-0 md:basis-[90px]"
      >
        {/* <img src="/icons/search-normal.svg" alt="search" /> */}
        Search
      </button>
    </form>
  );
}

export default Search;
