import { NavLink } from "react-router-dom";
import homeIcon from "../assets/icons/homeIcon.svg";
import searchIcon from "../assets/icons/searchIcon.svg";
import addIcon from "../assets/icons/addIcon.svg";
import { useProfile } from "../hooks/useProfile.js";
// import { useAuth } from "../hooks/useAuth.js";

const Navbar = () => {
  const { profile } = useProfile();
  // const { setProfileId, userId } = useAuth();

  return (
    <div className="h-15 bg-bg-main border-t border-neutral-600">
      <div className="flex h-full w-full items-center justify-around rounded-2xl">
        <NavLink
          to="/home"
          className="relative flex h-fit w-16 items-center justify-center"
        >
          {({ isActive }) => (
            <>
              <img className="h-8 mb-2" src={homeIcon} alt="home" />

              <span
                className={`absolute bottom-0 h-0.5 w-12 rounded-full bg-theme-light transition-all duration-300 ${
                  isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                }`}
              />
            </>
          )}
        </NavLink>

        <NavLink
          to="/search"
          className="relative flex h-fit w-16 items-center justify-center"
        >
          {({ isActive }) => (
            <>
              <img className="h-8 mb-2" src={searchIcon} alt="search" />

              <span
                className={`absolute bottom-0 h-0.5 w-12 rounded-full bg-theme-light transition-all duration-300 ${
                  isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                }`}
              />
            </>
          )}
        </NavLink>

        <NavLink
          to="/post"
          className="relative flex h-fit w-16 items-center justify-center"
        >
          {({ isActive }) => (
            <>
              <img className="h-8 mb-2" src={addIcon} alt="add post" />

              <span
                className={`absolute bottom-0 h-0.5 w-12 rounded-full bg-theme-light transition-all duration-300 ${
                  isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                }`}
              />
            </>
          )}
        </NavLink>

        <NavLink
          to="/profile"
          className="relative flex  h-fit w-16 items-center justify-center"
          >
          {({ isActive }) => (
            <>
              <div className="flex mb-2 h-8 w-8 items-center justify-center rounded-full border">
          
                <img
                  className="h-6 rounded-full object-cover object-center"
                  src={profile?.avatar}
                  alt="avatar"
                />
              </div>

              <span
                className={`absolute bottom-0 h-0.5 w-12 rounded-full bg-theme-light transition-all duration-300 ${
                  isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                }`}
              />
            </>
          )}
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
