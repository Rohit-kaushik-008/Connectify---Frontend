import RecentSearches from "./RecentSearches";

const SearchResults = () => {
  return (
    <div className="rounded-2xl bg-bg-light px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-3xl">
        {/* Recent Searches */}
        <section className="mb-10">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-heading-1 text-lg font-semibold text-white">
              Recent searches
            </h2>

            <button className="text-sm text-zinc-500 transition hover:text-white cursor-pointer">
              Clear all
            </button>
          </div>

          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
            {/* Recent Search 1 */}
            <RecentSearches />
          </div>
        </section>
      </div>
    </div>
  );
};

export default SearchResults;
