const ProfileMenu = ({ profile, stats }) => {
  return (
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
  );
};

export default ProfileMenu;
