import { useNavigate } from "react-router-dom";

const EditProfileButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate("/profileCustomization");
      }}
      className="w-full
                       h-12
                       sm:h-14
                       mt-2
                       bg-linear-to-r
                       border
                       border-white/10
                       bg-bg-lighter
                       active:scale-95
                       rounded-xl
                       font-['Poppins']
                       font-semibold
                       text-white
                       transition-all
                       duration-300
                       shadow-lg
                       shadow-[hsl(262,83%,58%)/99%]
                       cursor-pointer"
    >
      Edit Profile
    </button>
  );
};

export default EditProfileButton;
