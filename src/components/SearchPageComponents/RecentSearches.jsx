import { Search } from "lucide-react";
import { X } from "lucide-react";

const RecentSearches = () => {
  return (
    <div>
      <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3.5">
        <div className="flex min-w-0 items-center gap-3">
          <Search className="h-4 w-4 shrink-0 text-zinc-600" />

          <span className="truncate text-[15px] text-zinc-300">
            Rohit Kaushik
          </span>
        </div>

        <button className="shrink-0 text-zinc-600 transition hover:text-zinc-300">
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default RecentSearches;
