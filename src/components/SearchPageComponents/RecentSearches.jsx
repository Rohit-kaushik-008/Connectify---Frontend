import { Search } from "lucide-react";
import { useAuth } from "../../hooks/useAuth.js";

const RecentSearches = ({ searchItem }) => {
  const { setProfileId } = useAuth();
  return (
    <div>
      <div
        onClick={() => {
          setProfileId(searchItem?._id);
        }}
        className="flex items-center justify-between border-b border-zinc-800 px-4 py-3.5 cursor-pointer bg-bg-main hover:bg-bg-dark transition-all duration-100 ease-in active:bg-bg-light"
      >
        <div className="flex min-w-0 items-center gap-3">
          <Search className="h-4 w-4 shrink-0 text-zinc-500" />

          <span className="truncate text-[15px] text-zinc-300">
            @ {searchItem?.username}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecentSearches;
