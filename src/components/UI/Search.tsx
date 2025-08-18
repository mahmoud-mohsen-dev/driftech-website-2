function Search() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Search query submitted:", event);
    // Add logic to handle the search query, e.g., redirecting to a search results page
  };

  return (
    <form
      className="ml-[2px] flex w-[600px] items-center gap-[19.41px]"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Find Your Dream Car"
        className="text-foundation-gray-lighter border-foundation-gray-lighter focus:outline-foundation-orange-normal h-[49px] w-full rounded-xl border-[1.39px] bg-transparent pt-[12.94px] pr-[22.19px] pb-[13.02px] pl-[22.19px] outline-[1.39px] placeholder:text-[18.6px] placeholder:leading-[27.9px] focus:border-transparent"
        name="search-for-a-car"
      />
      <button
        type="submit"
        className="bg-foundation-orange-normal text-foundation-gray-lighter h-[49px] w-[49.92px] rounded-[7.44px] p-2 hover:bg-orange-600"
      >
        <img src="/icons/search-normal.svg" alt="search" />
      </button>
    </form>
  );
}

export default Search;
