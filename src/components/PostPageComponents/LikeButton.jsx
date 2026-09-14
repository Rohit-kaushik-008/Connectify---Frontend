import likeIcon from "../../assets/icons/likeIcon.svg";
import { usePost } from "../../hooks/usePost";
import heartIcon from "../../assets/icons/heartIcon.svg";

const LikeButton = ({ post }) => {
  const { handleLike } = usePost();
  // console.log(post);

  const handleIsLikedState = async (isLiked, postId) => {
    const success = await handleLike(isLiked, postId);

    if (!success) return;
  };
  return (
    <button
      onClick={() => {
        handleIsLikedState(post?.isLiked, post?._id);
      }}
      className="flex justify-center items-center gap-3 text-zinc-400 transition duration-150 hover:text-white cursor-pointer active:scale-90"
    >
      <span className="text-2xl">{post?.likesCount} </span>
      <img className="h-8" src={post?.isLiked ? heartIcon : likeIcon} alt="" />
    </button>
  );
};

export default LikeButton;
