import { useState } from "react";
import { useProfile } from "../hooks/useProfile.js";
import FeedPage from "./Feed.page.jsx";
import { usePost } from "../hooks/usePost.js";
import ProfileCoverImage from "../components/ProfilePageComponents/ProfileCoverImage.components.jsx";
import ProfileMenu from "../components/ProfilePageComponents/ProfileMenu.components.jsx";
import ProfileBio from "../components/ProfilePageComponents/ProfileBio.components.jsx";
import ProfileOptions from "../components/ProfilePageComponents/ProfileOptions.components.jsx";

const ProfilePage = () => {
  const { profile, stats } = useProfile();
  const { posts } = usePost();

  const [showFullBio, setShowFullBio] = useState(false);

  return (
    <div className="h-screen overflow-auto bg-bg-dark">
      {/* Cover Image */}
      <ProfileCoverImage profile={profile} />

      {/* Profile Menu */}
      <ProfileMenu profile={profile} stats={stats} />

      {/* Bio */}
      <ProfileBio
        profile={profile}
        showFullBio={showFullBio}
        setShowFullBio={setShowFullBio}
      />

      {/* Options  */}
      <ProfileOptions />

      <div className="border border-mist-500 mt-12 mb-8 mx-8"></div>

      {/* Feed */}
      <div className="mx-8 flex flex-col sm:flex-row  sm: justify-center flex-wrap gap-8 pb-20">
        {posts?.map((item) => {
          return (
            <div className="w-full" key={item?._id}>
              <FeedPage post={item} profile={profile} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfilePage;
