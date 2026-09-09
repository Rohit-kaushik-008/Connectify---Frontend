import FollowButton from "../FollowButton.jsx";
import EditProfileButton from "../EditProfileButton.jsx";
import { useAuth } from "../../hooks/useAuth.js";

const ProfileOptions = () => {
  const { isOwnProfile } = useAuth();
  return (
    <div className="flex justify-center items-center gap-4  py-2 px-8 sm:text-lg">
      {isOwnProfile ? <EditProfileButton /> : <FollowButton />}
    </div>
  );
};

export default ProfileOptions;
