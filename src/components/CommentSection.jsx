import { useState } from "react";
import { X } from "lucide-react";

const CommentModal = ({ setIsOpen }) => {
  const [comment, setComment] = useState("");

  // Temporary comments for UI testing
  const [comments, setComments] = useState([
    {
      _id: "1",
      username: "rahul",
      fullname: "Rahul Sharma",
      profileImage: "",
      text: "Amazing post 🔥",
    },
    {
      _id: "2",
      username: "aman",
      fullname: "Aman Verma",
      profileImage: "",
      text: "This looks really good!",
    },
    {
      _id: "3",
      username: "priya",
      fullname: "Priya Singh",
      profileImage: "",
      text: "Beautiful picture ❤️",
    },
  ]);

  const handleComment = (e) => {
    e.preventDefault();

    if (!comment.trim()) return;

    const newComment = {
      _id: Date.now(),
      username: "you",
      fullname: "You",
      profileImage: "",
      text: comment.trim(),
    };

    setComments((prev) => [...prev, newComment]);
    setComment("");
  };

  return (
    <div
      className={`fixed  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50`}
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
            className="border flex h-8 w-8 items-center justify-center rounded-full text-xl text-zinc-400 transition hover:bg-bg-light hover:text-white cursor-pointer"
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
              {comments.map((item) => (
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
                      {item.username?.charAt(0).toUpperCase()}
                    </div>
                  )}

                  {/* Comment content */}
                  <div className="min-w-0 border flex flex-col justify-center items-start">
                    <p className="font-body-6 text-sm text-white">
                      @{item.username}
                    </p>

                    <p className="mt-1 wrap-break-word text-sm text-zinc-400">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Comment input */}
        <form
          onSubmit={handleComment}
          className="flex items-center gap-3 border-t border-zinc-800 bg-bg-main p-4"
        >
          <input
            type="text"
            value={comment}
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
