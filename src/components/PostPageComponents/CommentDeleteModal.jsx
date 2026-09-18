const CommentDeleteModal = ({ setIsModalOpen, onDelete }) => {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full rounded-2xl">
      <div className="bg-bg-lighter flex flex-col border border-mist-600 rounded-2xl">
        <button
          onClick={() => onDelete()}
          className="py-3 text-lg cursor-pointer hover:text-red-400 transition-all duration-200 ease-in"
        >
          Delete
        </button>
        <hr className="opacity-30" />
        <button
          onClick={() => setIsModalOpen(false)}
          className="py-3 text-lg cursor-pointer text-mist-400 hover:text-white transition-all duration-200 ease-in"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CommentDeleteModal;
