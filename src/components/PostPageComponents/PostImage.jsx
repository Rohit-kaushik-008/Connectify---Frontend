const PostImage = ({post}) => {
  return (
    <div>
      {post.image && (
        <div className="w-full h-80 bg-black flex items-center justify-center overflow-hidden">
          <img
            src={post?.image}
            alt="Post"
            className="h-full w-full object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default PostImage;
