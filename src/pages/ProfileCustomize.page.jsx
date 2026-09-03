import usernameIcon from "../assets/icons/userIcon.svg";
import fullnameIcon from "../assets/icons/profileIcon.svg";
import API from "../utils/API.js";
import { useAuth } from "../hooks/useAuth.js";
import { useNavigate } from "react-router-dom";

const ProfileCustomize = () => {
  const { userId } = useAuth();

  const navigate = useNavigate();

  const handleCustomization = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    API.patch(`/user/customize/profile/${userId}`, data)
      .then(() => {
        alert("User Details Saved");
        e.target.reset();
        navigate("/profile");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="min-h-screen bg-bg-main flex items-center justify-center px-6">
      {/* Register Card */}
      <div
        className="w-full max-w-md bg-bg-light
                      border border-[hsl(230,29%,22%)]
                      rounded-2xl p-8 shadow-2xl"
      >
        {/* Heading */}
        <div className="mb-8">
          <h1 className="font-heading-2 text-3xl font-bold text-white text-center">
            Customize Your Profile
          </h1>

          {/* <p className="font-body-1 text-sm text-[hsl(0,0%,65%)] mt-2 text-center">
            Customize your profile and start your journey with Connectify.
          </p> */}
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => {
            handleCustomization(e);
          }}
          className="space-y-5"
        >
          {/* Profile Image */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white">
              Profile Image
            </label>

            <label className="flex items-center gap-4 p-4 border-2 border-dashed border-gray-700 rounded-xl cursor-pointer hover:border-theme-main transition-all duration-250">
              <div>
                <p className="text-sm font-medium text-gray-700">
                  Choose profile image
                </p>
                <p className="text-xs text-gray-400 mt-1">JPG, PNG or JPEG</p>
              </div>

              <input
                type="file"
                name="profileImage"
                accept="image/*"
                className="hidden"
              />
            </label>
          </div>

          {/* Cover Image */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Cover Image
            </label>

            <label className="flex items-center gap-4 p-4 border-2 border-dashed border-gray-700 rounded-xl cursor-pointer hover:border-theme-main transition">
              <div>
                <p className="text-sm font-medium text-gray-700">
                  Choose cover image
                </p>
                <p className="text-xs text-gray-400 mt-1">JPG, PNG or JPEG</p>
              </div>

              <input
                type="file"
                name="coverImage"
                accept="image/*"
                className="hidden"
              />
            </label>
          </div>

          {/* Fullname */}
          <div>
            <label
              htmlFor="fullname"
              className="block mb-2 text-sm font-medium
                         text-white-1 pl-2"
            >
              Fullname
            </label>

            <div className="relative">
              {/* Icon Space */}
              <div
                className="absolute left-4 top-1/2 -translate-y-1/2
                              w-5 h-5"
              >
                <img src={fullnameIcon} alt="" />
              </div>

              <input
                id="fullname"
                type="text"
                name="fullname"
                required
                autoComplete="off"
                placeholder="Enter your Fullname"
                className="w-full h-14
                           bg-[hsl(230,42%,9%)]
                           border border-[hsl(230,29%,25%)]
                           rounded-xl
                           pl-12 pr-4
                           text-white-1
                           placeholder:text-[hsl(0,0%,45%)]
                           outline-none
                           transition
                           focus:border-theme-light
                           focus:ring-1
                           focus:ring-theme-light
                           autocomplete-off"
              />
            </div>
          </div>

          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium
                         text-white-1 pl-2"
            >
              Username
            </label>

            <div className="relative">
              {/* Icon Space */}
              <div
                className="absolute left-4 top-1/2 -translate-y-1/2
                              w-5 h-5"
              >
                <img src={usernameIcon} alt="" />
              </div>

              <input
                id="username"
                type="text"
                name="username"
                required
                autoComplete="off"
                placeholder="Enter your Username"
                className="w-full h-14
                           bg-[hsl(230,42%,9%)]
                           border border-[hsl(230,29%,25%)]
                           rounded-xl
                           pl-12 pr-4
                           text-white-1
                           placeholder:text-[hsl(0,0%,45%)]
                           outline-none
                           transition
                           focus:border-theme-light
                           focus:ring-1
                           focus:ring-theme-light"
              />
            </div>
          </div>

          {/* Bio */}
          <div>
            <label
              htmlFor="bio"
              className="block mb-2 text-sm font-medium
                         text-white-1 pl-2"
            >
              Bio ( optional )*
            </label>

            <div>
              {/* Icon Space */}

              <textarea
                id="bio"
                type="text"
                name="bio"
                className="w-full
                           bg-[hsl(230,42%,9%)]
                           border border-[hsl(230,29%,25%)]
                           rounded-xl
                           py-2 px-4
                           pr-4
                           text-white-1
                           placeholder:text-[hsl(0,0%,45%)]
                           outline-none
                           transition
                           focus:border-theme-light
                           focus:ring-1
                           focus:ring-theme-light
                           resize-none
                           h-30"
              />
            </div>
          </div>

          {/* profileImage */}

          {/* coverImage */}

          {/* Create Account */}
          <button
            type="submit"
            className="w-full h-14 mt-2
                      bg-linear-to-r
                    from-theme-light
           to-theme-main
           active:scale-95
           rounded-xl
           font-body-6
           font-semibold
           text-white
           transition-all duration-300
           cursor-pointer
           shadow-lg
           shadow-[hsl(262,83%,58%)/25%]"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileCustomize;
