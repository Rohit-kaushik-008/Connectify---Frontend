import { X } from "lucide-react";
import API from "../../utils/API";
import { usePost } from "../../hooks/usePost";

const PostUpdateModal = ({ post, setPostModal, setIsModalOpen }) => {
  const { setPosts } = usePost();

  const onEdit = async (e, postId) => {
    try {
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);

      const response = await API.patch(
        `/user/profile/editPost/${postId}`,
        data,
      );

      if (!response.data.success) return;

      setPosts((prevPosts) =>
        prevPosts.map((item) =>
          item._id === postId ? response.data.data : item,
        ),
      );

      setPostModal(false);
      setIsModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-2xl border border-zinc-700 bg-bg-main p-6 shadow-2xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white font-heading-1">
            Edit Post
          </h2>

          <button
            type="button"
            onClick={() => setPostModal(false)}
            className="rounded-full mr-2 px-2 py-2 text-xl  transition hover:bg-bg-lighter hover:text-white cursor-pointer"
          >
            <X />
          </button>
        </div>

        {/* Post content */}
        <form
          onSubmit={(e) => {
            onEdit(e, post._id);
          }}
          className="flex flex-col gap-5"
        >
          <div>
            <textarea
              defaultValue={post?.caption}
              name="caption"
              rows="5"
              maxLength={500}
              required
              placeholder="Write something..."
              className="w-full resize-none rounded-xl border border-zinc-700 bg-bg-lighter px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-theme-main"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setPostModal(false)}
              className="rounded-xl border border-zinc-700 px-5 py-2.5 text-sm text-zinc-300 transition hover:bg-bg-light cursor-pointer active:scale-95"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-theme-dark px-5 py-2.5 text-sm font-medium text-white transition hover:bg-theme-main active:scale-95"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostUpdateModal;
