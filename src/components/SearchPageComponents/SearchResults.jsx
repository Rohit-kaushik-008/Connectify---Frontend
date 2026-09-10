import RecentSearches from "./RecentSearches";

const SearchResults = ({ searchItems, search }) => {
  return (
    <div className="rounded-2xl bg-bg-light px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-3xl">
        {/* Searches Result */}
        <section className="mb-10">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-heading-1 text-2xl w-full font-semibold pl-2 text-white">
              Results
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900/40">
            {search?.trim() &&
              (searchItems?.length > 0 ? (
                searchItems.map((item) => (
                  <div key={item._id}>
                    <RecentSearches searchItem={item} />
                  </div>
                ))
              ) : (
                <p className="py-4 text-center text-zinc-500">User not found</p>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SearchResults;
