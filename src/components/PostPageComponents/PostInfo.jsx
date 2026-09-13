import defaultAvatar from "../../assets/icons/DefaultAvatar.jpg";

const PostInfo = ({ profile }) => {
  return (
    <div className="flex items-center gap-4 min-w-0 flex-1">
      {/* Profile Image */}
      <img
        src={profile?.avatar || defaultAvatar}
        alt={profile?.username}
        className="h-16 w-16 shrink-0 rounded-full object-cover border-2"
      />

      {/* Name + Username */}
      <div className="min-w-0 flex-1">
        <h3 className="font-semibold font-heading-1 text-2xl leading-tight truncate">
          {profile?.fullname}
        </h3>

        <p className="text-[18px] text-zinc-500 truncate">
          @{profile?.username}
        </p>
      </div>
    </div>
  );
};

export default PostInfo;
