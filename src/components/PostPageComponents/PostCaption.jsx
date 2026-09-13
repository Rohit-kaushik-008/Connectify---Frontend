const PostCaption = ({ post }) => {
  return (
    <div className="h-26 px-5 py-2 bg-bg-light overflow-hidden">
      <p className="whitespace-pre-wrap wrap-break-word text-[16px] sm:text-lg leading-6 text-zinc-200 line-clamp-3">
        {post?.caption}
      </p>
    </div>
  );
};

export default PostCaption;
