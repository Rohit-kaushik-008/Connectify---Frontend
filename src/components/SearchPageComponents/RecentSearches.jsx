import { Search } from "lucide-react";

const RecentSearches = ({searchItem}) => {
  // console.log(searchItem)
  return (
    <div>
      <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3.5">
        <div className="flex min-w-0 items-center gap-3">
          <Search className="h-4 w-4 shrink-0 text-zinc-600" />

          <span className="truncate text-[15px] text-zinc-300">
            @ {searchItem?.username}
          </span>
        </div>

      </div>
    </div>
  );
};

export default RecentSearches;
