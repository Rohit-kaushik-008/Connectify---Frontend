import { useState } from "react";
import moreIcon from "../../assets/icons/moreIcon.svg";
import API from "../../utils/API";
import { usePost } from "../../hooks/usePost";
import PostUpdateModal from "./PostUpdateModal";

const EditButton = ({ post }) => {
  const { setPosts } = usePost();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postModal, setPostModal] = useState(false);

  const onDelete = async (postId) => {
    try {
      const response = await API.delete(`/user/profile/deletePost/${postId}`);
      if (!response.data.success) return;

      setPosts((prevPosts) => prevPosts.filter((post) => post._id !== postId));

      setIsModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const onCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Three dot button */}
      <div
        className="shrink-0 rounded-full p-2 text-zinc-400 transition hover:bg-bg-main hover:text-white active:scale-90"
        aria-label="Post options"
      >
        <img
          onClick={(e) => {
            e.stopPropagation();
            setIsModalOpen(true);
          }}
          className="cursor-pointer"
          src={moreIcon}
          alt="Post options"
        />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          onClick={(e) => {
            e.stopPropagation();
            onCancel();
          }}
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs"
        >
          {/* Modal box */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-[90%] max-w-xs overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900 shadow-xl"
          >
            {/* Delete */}
            <button
              type="button"
              onClick={() => onDelete(post._id)}
              className="w-full cursor-pointer border-b border-zinc-700 px-5 py-4 text-center text-md text-red-400 transition hover:bg-zinc-800"
            >
              Delete
            </button>

            {/* Edit */}
            <div>
              <button
                type="button"
                onClick={() => {
                  setPostModal(true);
                }}
                className="w-full cursor-pointer border-b border-zinc-700 px-5 py-4 text-center text-md text-white transition hover:bg-zinc-800"
              >
                Edit
              </button>
              {postModal && (
                <PostUpdateModal post={post} setPostModal={setPostModal} setIsModalOpen={setIsModalOpen} />
              )}
            </div>

            {/* Cancel */}
            <button
              type="button"
              onClick={onCancel}
              className="w-full cursor-pointer px-5 py-4 text-center text-md text-zinc-400 transition hover:bg-zinc-800"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default EditButton;
