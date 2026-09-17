import commentIcon from "../../assets/icons/commentIcon.svg";

const CommentButton = ({ post, setIsOpen }) => {
  return (
    <button onClick={() => setIsOpen(true)}>
      <div className="flex justify-center items-center gap-3 text-zinc-400 transition duration-150 hover:text-white cursor-pointer active:scale-90">
        <span className="text-2xl">{post?.commentsCount} </span>
        <img className="h-8" src={commentIcon} alt="" />
      </div>
    </button>
  );
};

export default CommentButton;
