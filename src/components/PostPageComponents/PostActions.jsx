import CommentButton from "./CommentButton";
import LikeButton from "./LikeButton";
import CommentSection from "../CommentSection.jsx";
import { useState } from "react";

const PostActions = ({ post }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="px-5 py-4 bg-bg-main">
      <div className="flex items-center gap-8">
        <LikeButton post={post} />
        <CommentButton post={post} setIsOpen={setIsOpen} />

        {isOpen && <CommentSection post={post} setIsOpen={setIsOpen} />}
      </div>
    </div>
  );
};

export default PostActions;
