import { Search } from "lucide-react";
import API from "../../utils/API.js";
import { useRef } from "react";

const SearchBar = ({ search, setSearch, setSearchItems }) => {
  const timeoutId = useRef(null);

  const handleSearch = async (e) => {
    const value = e.target.value;

    setSearch(value);

    clearTimeout(timeoutId.current);

    if (value.trim() === "") return;

    timeoutId.current = setTimeout(async () => {
      try {
        const response = await API.get(`/api/search/user?username=${value}`);
        setSearchItems(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }, 700);
  };

  return (
    <div>
      <div className="w-full max-w-2xl">
        <div className="flex items-center gap-3 rounded-2xl border border-zinc-800 bg-bg-light px-4 py-3 transition-all duration-300 focus-within:border-zinc-600 focus-within:bg-bg-lighter">
          {/* Search Icon */}
          <div className="opacity-40">
            <Search />
          </div>

          {/* Input */}
          <input
            type="text"
            value={search}
            onChange={(e) => {
              handleSearch(e);
            }}
            placeholder="Search people..."
            className="min-w-0 flex-1 bg-transparent text-[16px] text-white outline-none placeholder:text-zinc-400"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
