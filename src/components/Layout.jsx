import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar.jsx";

const Layout = () => {
  return (
    <div className="flex h-screen text-gray-300 bg-gradient-to-b from-[#001217] via-[#001217]  to-black backdrop-blur-lg bg-opacity-50">
      <Sidebar />
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

