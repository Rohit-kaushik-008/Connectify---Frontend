import logoIcon from "../assets/images/newLogo2.png";
import logoutIcon from "../assets/icons/logoutIcon.svg";
import { useNavigate } from "react-router-dom";
import API from "../utils/API";

const MenuBar = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await API.post("/api/auth/logout");
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center h-full w-full py-2 px-4 border-b border-neutral-700">
      <div>
        <img className="h-15" src={logoIcon} alt="" />
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
