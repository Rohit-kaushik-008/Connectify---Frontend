// import { useState } from "react";
import SearchBar from "../components/SearchPageComponents/SearchBar";
import SearchPageHeader from "../components/SearchPageComponents/SearchPageHeader";
import SearchRestults from "../components/SearchPageComponents/SearchResults";
import { useState } from "react";

const SearchPage = () => {
  const [search, setSearch] = useState();
  const [searchItems, setSearchItems] = useState();
  return (
    <div className="min-h-screen bg-bg-dark px-4 py-6 sm:px-8">
      <div className="mx-auto w-full max-w-2xl">
        {/* Header */}
        <SearchPageHeader />

        {/* Search Bar */}
        <SearchBar
          search={search}
          setSearch={setSearch}
          searchItems={searchItems}
          setSearchItems={setSearchItems}
        />

        {/* Search Results */}
        <div className="mt-8">
          <SearchRestults searchItems={searchItems} search={search} />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
