import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import MenuBar from "../components/MenuBar.jsx";
import Sidebar from "../components/Sidebar.jsx";

const AppLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="h-20 sticky top-0 z-10 bg-bg-main lg:hidden">
        <MenuBar />
      </div>

      <div className="hidden w-1/5 lg:block h-screen z-10 bg-bg-dark">
        <Sidebar />
      </div>

      <div className="flex-1 lg:w-4/5 h-screen overflow-y-auto">
        <Outlet />
      </div>

      <div className="fixed w-full bottom-0 left-0 lg:hidden">
        <Navbar />
      </div>
    </div>
  );
};

export default AppLayout;
