import { handleFollow } from "../utils/HandleFollow.js";
import { useAuth } from "../hooks/useAuth.js";
import { useProfile } from "../hooks/useProfile.js";

const FollowButton = () => {
  const { profileId } = useAuth();
  const { isFollow, setIsFollow } = useProfile();

  return (
    <button
      onClick={() => {
        handleFollow(isFollow, profileId);
        setIsFollow(!isFollow);
      }}
      className={`w-full h-12 sm:h-14 mt-2 bg-linear-to-r active:scale-95 rounded-xl font-body-6 font-semibold text-white transition-all duration-300 shadow-lg shadow-[hsl(262,83%,58%)/25%] cursor-pointer ${isFollow ? "bg-bg-light" : "from-theme-light to-theme-main"}`}
    >
      {isFollow ? "Unfollow" : "Follow"}
    </button>
  );
};

export default FollowButton;
