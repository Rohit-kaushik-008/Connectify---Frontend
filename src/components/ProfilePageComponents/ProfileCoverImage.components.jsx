const ProfileCoverImage = ({ profile }) => {
  return (
    <div className="px-4 py-2">
      <img
        className="h-40 sm:h-60 w-full rounded-2xl object-cover object-center"
        src={profile?.banner}
        alt="banner"
      />
    </div>
  );
};

export default ProfileCoverImage;
