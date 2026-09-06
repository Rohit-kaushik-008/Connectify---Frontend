import { useState } from "react";
import { useProfile } from "../hooks/useProfile.js";
import FeedPage from "./Feed.page.jsx";
import { usePost } from "../hooks/usePost.js";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const { profile, stats } = useProfile();
  const { posts } = usePost();
  const navigate = useNavigate(); 

  const [showFullBio, setShowFullBio] = useState(false);

  return (
    <div className="h-screen overflow-auto bg-bg-dark">
      {/* Cover Image */}
      <div className="px-4 py-2">
        <img
          className="h-40 sm:h-60 w-full rounded-2xl object-cover object-center"
          src={profile?.banner}
          alt="banner"
        />
      </div>

      {/* Profile Menu */}
      <div className="py-4 px-6 flex items-center min-w-0 gap-4 sm:gap-8">
        {/* Profile Image */}
        <div className="h-25 w-25 shrink-0 rounded-full border-2 border-neutral-500 sm:h-30 sm:w-30">
          <img
            className="h-full w-full rounded-full object-cover object-center"
            src={profile?.avatar}
            alt="avatar"
          />
        </div>

        {/* Profile Info */}
        <div className="min-w-0 flex-1">
          {/* Full name */}
          <h1 className="text-2xl sm:text-4xl font-bold text-white font-heading-1 truncate">
            {profile?.fullname}
          </h1>

          {/* Stats */}
          <div className="flex gap-4 sm:gap-8 mt-2 sm:text-lg font-semibold font-body-6">
            <div className="flex flex-col justify-center items-center">
              <h2>{stats?.postsCount}</h2>
              <h2>posts</h2>
            </div>

            <div className="flex flex-col justify-center items-center">
              <h2>{stats?.followersCount}</h2>
              <h2>followers</h2>
            </div>

            <div className="flex flex-col justify-center items-center">
              <h2>{stats?.followingCount}</h2>
              <h2>following</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="px-8 py-2 sm:text-lg">
        {/* username */}
        <div>
          <h2 className="text-white mt-1">@{profile?.username}</h2>
        </div>
        <div
          onClick={() => setShowFullBio(!showFullBio)}
          className="cursor-pointer w-fit"
        >
          <p className={`text-mist-400 ${showFullBio ? "" : "line-clamp-2"}`}>
            {profile?.bio}
          </p>
          {profile?.bio?.length > 100 && (
            <span className="text-sm text-white-2">
              {showFullBio ? "show less" : "Read more"}
            </span>
          )}
        </div>
      </div>

      {/* Options  */}
      <div className="flex justify-center items-center gap-4  py-2 px-8 sm:text-lg">
        <button
          className="w-full
                       h-12
                       sm:h-14
                       mt-2
                       bg-linear-to-r
                       from-theme-light
                       to-theme-main
                       active:scale-95
                       rounded-xl
                       font-body-6
                       font-semibold
                       text-white
                       transition-all
                       duration-300
                       shadow-lg
                       shadow-[hsl(262,83%,58%)/25%]
                       cursor-pointer"
        >
          Follow
        </button>
        <button
          onClick={() => {
            navigate("/profileCustomization");
          }}
          className="w-full
                       h-12
                       sm:h-14
                       mt-2
                       bg-linear-to-r
                       border
                       border-white/10
                       bg-bg-lighter
                       active:scale-95
                       rounded-xl
                       font-['Poppins']
                       font-semibold
                       text-white
                       transition-all
                       duration-300
                       shadow-lg
                       shadow-[hsl(262,83%,58%)/99%]
                       cursor-pointer"
        >
          Edit Profile
        </button>
      </div>

      <div className="border border-mist-500 mt-12 mb-8 mx-8"></div>

      {/* Feed */}
      <div className="mx-8 flex flex-col sm:flex-row  sm: justify-center flex-wrap gap-8 pb-20">
        {posts?.map((item) => {
          return (
            <div key={item?._id}>
              <FeedPage post={item} profile={profile} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfilePage;
