import { useState } from "react";

const recentSearches = [
  {
    id: 1,
    fullname: "Rohit Kaushik",
    username: "rohitkaushik",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100",
  },
  {
    id: 2,
    fullname: "Rahul Sharma",
    username: "rahulsharma",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
  },
  {
    id: 3,
    fullname: "Ananya",
    username: "ananya_07",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
  },
];

const searchResults = [
  {
    id: 1,
    fullname: "Rohit Kaushik",
    username: "rohitkaushik",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100",
  },
  {
    id: 2,
    fullname: "Rohit Sharma",
    username: "rohitsharma",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
  },
];

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const isSearching = searchQuery.trim().length > 0;

  return (
    <div className="min-h-screen bg-bg-light px-4 py-6 sm:px-8">
      <div className="mx-auto w-full max-w-2xl">

        {/* Header */}
        <div className="mb-6">
          <h1 className="font-heading-1 text-3xl font-bold text-white">
            Search
          </h1>
          <p className="mt-1 text-sm text-zinc-500">
            Find people on Connectify
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <svg
            className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
            />
          </svg>

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search users..."
            className="
              w-full rounded-2xl
              border border-zinc-800
              bg-zinc-900
              py-3.5 pl-12 pr-12
              text-white
              outline-none
              placeholder:text-zinc-600
              focus:border-zinc-600
            "
          />

          {isSearching && (
            <button
              onClick={() => setSearchQuery("")}
              className="
                absolute right-4 top-1/2
                -translate-y-1/2
                text-zinc-500
                transition
                hover:text-white
              "
            >
              ✕
            </button>
          )}
        </div>

        {/* RECENT SEARCHES */}
        {!isSearching && (
          <section>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-heading-1 text-lg font-semibold text-white">
                Recent searches
              </h2>

              <button className="text-sm text-zinc-500 transition hover:text-white">
                Clear all
              </button>
            </div>

            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
              {recentSearches.map((user, index) => (
                <div
                  key={user.id}
                  className={`
                    flex items-center justify-between
                    px-4 py-3
                    transition hover:bg-zinc-800/60
                    ${index !== recentSearches.length - 1
                      ? "border-b border-zinc-800"
                      : ""}
                  `}
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <img
                      src={user.avatar}
                      alt={user.username}
                      className="h-11 w-11 shrink-0 rounded-full border border-zinc-700 object-cover"
                    />

                    <div className="min-w-0">
                      <h3 className="truncate font-semibold text-white">
                        {user.fullname}
                      </h3>

                      <p className="truncate text-sm text-zinc-500">
                        @{user.username}
                      </p>
                    </div>
                  </div>

                  <button
                    className="
                      ml-3 shrink-0
                      text-zinc-600
                      transition
                      hover:text-white
                    "
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SEARCH RESULTS */}
        {isSearching && (
          <section>
            <h2 className="mb-4 font-heading-1 text-lg font-semibold text-white">
              Search results
            </h2>

            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
              {searchResults.length > 0 ? (
                searchResults.map((user, index) => (
                  <div
                    key={user.id}
                    className={`
                      flex items-center gap-3
                      px-4 py-3
                      transition hover:bg-zinc-800/60
                      cursor-pointer
                      ${index !== searchResults.length - 1
                        ? "border-b border-zinc-800"
                        : ""}
                    `}
                  >
                    <img
                      src={user.avatar}
                      alt={user.username}
                      className="h-12 w-12 shrink-0 rounded-full border border-zinc-700 object-cover"
                    />

                    <div className="min-w-0">
                      <h3 className="truncate font-semibold text-white">
                        {user.fullname}
                      </h3>

                      <p className="truncate text-sm text-zinc-500">
                        @{user.username}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="px-5 py-12 text-center">
                  <div className="mb-3 text-3xl">⌕</div>

                  <h3 className="font-semibold text-white">
                    No users found
                  </h3>

                  <p className="mt-1 text-sm text-zinc-500">
                    Try searching with a different name or username.
                  </p>
                </div>
              )}
            </div>
          </section>
        )}

      </div>
    </div>
  );
};

export default SearchPage;
