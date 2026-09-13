import CommentButton from "./CommentButton";
import LikeButton from "./LikeButton";

const PostActions = ({ post }) => {
  return (
    <div className="px-5 py-4 bg-bg-main">
      <div className="flex items-center gap-8">
        <LikeButton post={post} />
        <CommentButton post={post} />
      </div>
    </div>
  );
};

export default PostActions;
