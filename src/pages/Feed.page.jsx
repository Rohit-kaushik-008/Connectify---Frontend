import likeIcon from "../assets/icons/likeIcon.svg";
import commentIcon from "../assets/icons/commentIcon.svg";
import moreIcon from "../assets/icons/moreIcon.svg";
import { handleLike } from "../utils/postActions.js";
import { usePost } from "../hooks/usePost.js";
import defaultAvatar from "../assets/icons/DefaultAvatar.jpg"


const FeedPage = ({ post, profile }) => {
  const { setPosts } = usePost();

  // console.log(post)

  const handleIsLikedState = async (isLiked, postId) => {
    const success = await handleLike(isLiked, postId);

    if (!success) return;

    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post._id === postId ? { ...post, isLiked: !post.isLiked } : post,
      ),
    );
  };

  return (
    <article className="w-full max-w-2xl overflow-hidden rounded-2xl bg-zinc-950 text-white">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 bg-bg-light min-w-0">
        {/* Profile + Info */}
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

        {/* More Button */}
        <button
          className="shrink-0 rounded-full p-2 text-zinc-400 transition hover:bg-bg-main hover:text-white cursor-pointer active:scale-90"
          aria-label="Post options"
        >
          <img src={moreIcon} alt="" />
        </button>
      </div>

      {/* Caption Area */}
      <div className="h-26 px-5 py-2 bg-bg-light overflow-hidden">
        
          <p className="whitespace-pre-wrap wrap-break-word text-[16px] sm:text-lg leading-6 text-zinc-200 line-clamp-3">
            {post?.caption}
          </p>
        
      </div>

      {/* Image Area */}
      {post.image && (
        <div className="w-full h-80 bg-black flex items-center justify-center overflow-hidden">
          <img
            src={post?.image}
            alt="Post"
            className="h-full w-full object-contain"
          />
        </div>
      )}

      {/* Actions */}
      <div className="px-5 py-4 bg-bg-main">
        <div className="flex items-center gap-8">
          {/* Like */}
          <button
            onClick={() => {
              handleIsLikedState(post?.isLiked, post?._id);
            }}
            className="flex justify-center items-center gap-3 text-zinc-400 transition duration-150 hover:text-white cursor-pointer active:scale-90"
          >
            <span className="text-2xl">{post?.likesCount} </span>
            <img className="h-8" src={likeIcon} alt="" />
          </button>

          {/* Comments */}
          <button className="flex justify-center items-center gap-3 text-zinc-400 transition duration-150 hover:text-white cursor-pointer active:scale-90">
            <span className="text-2xl">{post?.commentsCount} </span>
            <img className="h-8" src={commentIcon} alt="" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default FeedPage;
