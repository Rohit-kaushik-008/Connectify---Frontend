import { useState } from "react";
import { X } from "lucide-react";
import { usePost } from "../hooks/usePost";
import { useEffect } from "react";
import API from "../utils/API";

const CommentModal = ({ setIsOpen, post }) => {
  const { postComment } = usePost();
  const [comment, setComment] = useState("");

  // Temporary comments for UI testing
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await API.get(`/user/post/PostComments/${post._id}`);
        if (response.data.success) {
          setComments(response.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchComments();
  }, [post._id]);

  const uploadComment = (e, postId) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    postComment(data, postId);
    e.target.reset();
  };

  return (
    <div
      className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50`}
    >
      <div
        className="flex h-[80vh] w-full max-w-lg flex-col overflow-hidden rounded-2xl bg-bg-main shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-4">
          <h2 className="text-xl font-body-6 text-white">Comments</h2>

          <button
            onClick={() => setIsOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-full text-xl text-zinc-400 transition hover:bg-bg-light hover:text-white cursor-pointer"
          >
            <X />
          </button>
        </div>

        {/* Comments */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {comments.length === 0 ? (
            <div className="flex h-full items-center justify-center text-zinc-500">
              No comments yet.
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {comments?.map((item) => (
                <div key={item._id} className="flex gap-3">
                  {/* Profile image */}
                  {item.profileImage ? (
                    <img
                      src={item.profileImage}
                      alt=""
                      className="h-10 w-10 shrink-0 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-theme-dark text-sm font-semibold text-white">
                      <img
                        className="rounded-full w-full h-full object-cover object-center"
                        src={item.users.profileImage}
                        alt=""
                      />
                    </div>
                  )}

                  {/* Comment content */}
                  <div className="min-w-0  flex flex-col justify-center items-start">
                    <p className="font-body-6 text-sm text-white">
                      @{item.users.username}
                    </p>

                    <p className="mt-1 wrap-break-word text-sm text-zinc-400">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Comment input */}
        <form
          onSubmit={(e) => {
            uploadComment(e, post._id);
          }}
          className="flex items-center gap-3 border-t border-zinc-800 bg-bg-main p-4"
        >
          <input
            type="text"
            name="content"
            value={comment}
            autoComplete="off"
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write a comment..."
            maxLength={300}
            className="min-w-0 flex-1 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-theme-main"
          />

          <button
            type="submit"
            disabled={!comment.trim()}
            className="rounded-xl bg-theme-dark px-5 py-3 text-sm font-body-6 text-white transition hover:bg-theme-main active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentModal;
