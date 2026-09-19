import { LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";
import homeIcon from "../assets/icons/homeIcon.svg";
import searchIcon from "../assets/icons/searchIcon.svg";
import addIcon from "../assets/icons/addIcon.svg";
import { useProfile } from "../hooks/useProfile.js";
import API from "../utils/API.js";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { profile, goToMyProfile } = useProfile();

  const navigate = useNavigate();
  const handleLogout = async () => {
    await API.post("/api/auth/logout");
    navigate("/login");
  };

  return (
    <div className="w-full h-screen flex flex-col justify-between items-center bg-bg-dark p-4">
      <div className="w-full flex flex-col p-2">
        {/* Sidebar Website Logo */}
        <div className="py-2  px-2">
          <h1 className="font-heading-1 text-2xl font-bold bg-linear-to-r from-purple-400 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
            Connectify
          </h1>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col gap-4 py-8">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `flex w-full items-center gap-5 rounded-xl px-4 py-4 transition-all duration-200 ${
                isActive ? "bg-bg-light" : "bg-transparent hover:bg-bg-light/50"
              }`
            }
          >
            <img className="h-8 w-8" src={homeIcon} alt="home" />

            <span className="text-lg font-medium text-white font-body-2">
              Home
            </span>
          </NavLink>

          <NavLink
            to="/search"
            className={({ isActive }) =>
              `flex w-full items-center gap-5 rounded-xl px-4 py-4 transition-all duration-200 ${
                isActive ? "bg-bg-light" : "bg-transparent hover:bg-bg-light/50"
              }`
            }
          >
            <img className="h-8 w-8" src={searchIcon} alt="search" />

            <span className="text-lg font-medium text-white font-body-2">
              Search
            </span>
          </NavLink>

          <NavLink
            to="/post"
            className={({ isActive }) =>
              `flex w-full items-center gap-5 rounded-xl px-4 py-4 transition-all duration-200 ${
                isActive ? "bg-bg-light" : "bg-transparent hover:bg-bg-light/50"
              }`
            }
          >
            <img className="h-8 w-8" src={addIcon} alt="add" />

            <span className="text-lg font-medium text-white font-body-2">
              Create Post
            </span>
          </NavLink>

          <NavLink
            onClick={goToMyProfile}
            to="/profile"
            className={({ isActive }) =>
              `flex w-full items-center gap-5 rounded-xl px-4 py-4 transition-all duration-200 ${
                isActive ? "bg-bg-light" : "bg-transparent hover:bg-bg-light/50"
              }`
            }
          >
            <img
              className="h-8 w-8 rounded-full object-cover object-center"
              src={profile?.profileImage}
              alt="profile"
            />

            <span className="text-lg font-medium text-white font-body-2">
              Profile
            </span>
          </NavLink>
        </div>
      </div>

      {/* logout Button */}
      <button
        onClick={() => {
          handleLogout();
        }}
        className="flex items-center bg-bg-light text-white py-3 px-4 rounded-xl active:bg-bg-lighter transition-all duration-150 ease-in w-full active:scale-95"
      >
        <LogOut className="h-8 w-8" />
      </button>
    </div>
  );
};

export default Sidebar;
