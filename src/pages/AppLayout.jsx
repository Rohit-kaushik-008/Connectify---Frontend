import { Outlet } from "react-router-dom";
import Navbar from  "../components/Navbar.jsx";
import MenuBar from "../components/MenuBar.jsx";

const AppLayout = () => {
  return (
    <>
      <div className="h-20 sticky top-0 z-10 bg-bg-main">
        <MenuBar />
      </div>

      <div>
        <Outlet />
      </div>

      <div className="fixed w-full bottom-0 left-0">
        <Navbar />
      </div>
    </>
  );
};

export default AppLayout;