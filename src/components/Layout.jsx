import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar.jsx";
import CatButton from "./Cat/CatButton.jsx";

const Layout = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 h-screen  text-gray-300 bg-gradient-to-b from-[#001217] via-[#001217]  to-black backdrop-blur-lg bg-opacity-50">
      <div className="col-span-2 min-[1000px]:block hidden bg-pink500">
        <Sidebar />
      </div>
      <div className="col-span-12 min-[1000px]:col-span-10 m-5">
        <Outlet />
      </div>

      <CatButton />
    </div>
  );
};

export default Layout;
