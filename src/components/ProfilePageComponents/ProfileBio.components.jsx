const ProfileBio = ({ profile, showFullBio, setShowFullBio }) => {
  return (
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
  );
};

export default ProfileBio;
