import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar.jsx";

const Layout = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 h-screen  text-gray-300 bg-gradient-to-b from-[#001217] via-[#001217]  to-black backdrop-blur-lg bg-opacity-50">
      <div className="col-span-2 md:block hidden">
        <Sidebar />
      </div>
      <div className="col-span-10 m-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
