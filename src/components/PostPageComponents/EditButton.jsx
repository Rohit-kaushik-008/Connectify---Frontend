import moreIcon from "../../assets/icons/moreIcon.svg";

const EditButton = () => {
  return (
    <button
      className="shrink-0 rounded-full p-2 text-zinc-400 transition hover:bg-bg-main hover:text-white cursor-pointer active:scale-90"
      aria-label="Post options"
    >
      <img src={moreIcon} alt="" />
    </button>
  );
};

export default EditButton;
