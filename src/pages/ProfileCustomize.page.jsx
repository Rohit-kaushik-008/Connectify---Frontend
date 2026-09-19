import usernameIcon from "../assets/icons/userIcon.svg";
import fullnameIcon from "../assets/icons/profileIcon.svg";
import API from "../utils/API.js";
import { useAuth } from "../hooks/useAuth.js";
import { useNavigate } from "react-router-dom";
import { useProfile } from "../hooks/useProfile.js";
import { useState } from "react";
import { X } from "lucide-react";

const ProfileCustomize = () => {
  const { userId } = useAuth();
  const { setProfile } = useProfile();

  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);

  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");

  const navigate = useNavigate();

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage({ file, preview: URL.createObjectURL(file) });
    }
  };

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImage({ file, preview: URL.createObjectURL(file) });
    }
  };

  const handleCustomization = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    API.patch(`/user/customize/profile/${userId}`, formData)
      .then((res) => {
        setProfile(res.data.data);
        alert("User Details Saved");
        e.target.reset();
        navigate("/profile");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="min-h-screen pt-10 pb-30 bg-bg-main flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-bg-light border border-[hsl(230,29%,22%)] rounded-2xl p-8 shadow-2xl">
        {/* Page Title */}
        <div className="mb-8 flex items-center justify-between">
          <h1 className="font-heading-2 text-3xl font-bold text-white text-center">
            Customize Your Profile
          </h1>
          {/* here apply close page icon */}
          <div
            className="bg-bg-light rounded-full p-2 hover:bg-theme-main transition-all duration-150 ease-in cursor-pointer"
            onClick={() => navigate("/profile")}  
          >
            <X />
          </div>
        </div>
        {/* form */}
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
            <label className="flex flex-col items-center gap-4 p-4 border-2 border-dashed border-gray-700 rounded-xl cursor-pointer hover:border-theme-main transition-all duration-250">
              {profileImage ? (
                <img
                  src={profileImage.preview}
                  alt="Profile preview"
                  className="w-24 h-24 rounded-full object-cover"
                />
              ) : (
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    Choose profile image
                  </p>
                  <p className="text-xs text-gray-400 mt-1">JPG, PNG or JPEG</p>
                </div>
              )}
              <input
                type="file"
                name="profileImage"
                accept="image/*"
                className="hidden"
                onChange={handleProfileImageChange}
              />
            </label>
          </div>
          {/* Cover Image */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Cover Image
            </label>
            <label className="flex flex-col items-center gap-4 p-4 border-2 border-dashed border-gray-700 rounded-xl cursor-pointer hover:border-theme-main transition">
              {coverImage ? (
                <img
                  src={coverImage.preview}
                  alt="Cover preview"
                  className="w-full h-40 rounded-xl object-cover"
                />
              ) : (
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    Choose cover image
                  </p>
                  <p className="text-xs text-gray-400 mt-1">JPG, PNG or JPEG</p>
                </div>
              )}
              <input
                type="file"
                name="coverImage"
                accept="image/*"
                className="hidden"
                onChange={handleCoverImageChange}
              />
            </label>
          </div>
          {/* fullname */}
          <div>
            <label
              htmlFor="fullname"
              className="block mb-2 text-sm font-medium text-white-1 pl-2"
            >
              Fullname
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5">
                <img src={fullnameIcon} alt="" />
              </div>
              <input
                id="fullname"
                type="text"
                name="fullname"
                minLength={1}
                maxLength={15}
                autoComplete="off"
                placeholder="Enter your Fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                className="w-full h-14 bg-[hsl(230,42%,9%)] border border-[hsl(230,29%,25%)] rounded-xl pl-12 pr-4 text-white-1 placeholder:text-[hsl(0,0%,45%)] outline-none transition focus:border-theme-light focus:ring-1 focus:ring-theme-light autocomplete-off"
              />
            </div>
            <div className="mt-1 flex justify-end">
              <span className="text-sm pr-2 text-zinc-500">
                {fullname.length}/15
              </span>
            </div>
          </div>
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-white-1 pl-2"
            >
              Username
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5">
                <img src={usernameIcon} alt="" />
              </div>
              <input
                id="username"
                type="text"
                name="username"
                minLength={1}
                maxLength={15}
                autoComplete="off"
                placeholder="Enter your Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full h-14 bg-[hsl(230,42%,9%)] border border-[hsl(230,29%,25%)] rounded-xl pl-12 pr-4 text-white-1 placeholder:text-[hsl(0,0%,45%)] outline-none transition focus:border-theme-light focus:ring-1 focus:ring-theme-light"
              />
            </div>
            <div className="mt-1 flex justify-end">
              <span className="text-sm pr-2 text-zinc-500">
                {username.length}/15
              </span>
            </div>
          </div>
          {/* Bio */}
          <div>
            <label
              htmlFor="bio"
              className="block mb-2 text-sm font-medium text-white-1 pl-2"
            >
              Bio ( optional )*
            </label>
            <div>
              <textarea
                id="bio"
                name="bio"
                minLength={0}
                maxLength={100}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full bg-[hsl(230,42%,9%)] border border-[hsl(230,29%,25%)] rounded-xl py-2 px-4 pr-4 text-white-1 placeholder:text-[hsl(0,0%,45%)] outline-none transition focus:border-theme-light focus:ring-1 focus:ring-theme-light resize-none h-30"
              />
            </div>
            <div className="mt-1 flex justify-end">
              <span className="text-sm pr-2 text-zinc-500">
                {bio.length}/100
              </span>
            </div>
          </div>
          {/* Save */}
          <div>
            <button
              type="submit"
              className="w-full h-14 mt-2 bg-linear-to-r from-theme-light to-theme-main active:scale-95 rounded-xl font-body-6 font-semibold text-white transition-all duration-300 cursor-pointer shadow-lg shadow-[hsl(262,83%,58%)/25%]"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileCustomize;
