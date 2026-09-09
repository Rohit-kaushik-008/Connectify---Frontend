const FollowButton = () => {
  return (
    <button
      className="w-full
                       h-12
                       sm:h-14
                       mt-2
                       bg-linear-to-r
                       from-theme-light
                       to-theme-main
                       active:scale-95
                       rounded-xl
                       font-body-6
                       font-semibold
                       text-white
                       transition-all
                       duration-300
                       shadow-lg
                       shadow-[hsl(262,83%,58%)/25%]
                       cursor-pointer"
    >
      Follow
    </button>
  );
};

export default FollowButton;
