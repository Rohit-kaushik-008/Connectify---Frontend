import logoutIcon from "../assets/icons/logoutIcon.svg";
import { useNavigate } from "react-router-dom";
import API from "../utils/API";
// import logo from "../assets/icons/FavIcon_.png"

const MenuBar = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await API.post("/api/auth/logout");
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center h-full w-full py-2 px-4 border-b border-neutral-700">
      <div className="flex justify-center items-center gap-2">
        {/* <img className="h-10 rounded-full" src={logo} alt="" /> */}
        <h1 className="font-bold font-heading-1 text-2xl text-theme-light border-theme-main py-2 px- rounded-full">Connectify</h1>
      </div>
      <div
        onClick={() => {
          handleLogout();
        }}
        className="mr-2 cursor-pointer p-2 rounded-xl"
      >
        <img className="h-8" src={logoutIcon} alt="" />
      </div>
    </div>
  );
};

export default MenuBar;
