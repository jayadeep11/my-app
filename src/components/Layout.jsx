import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar.jsx";
import { FaCat } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
const Layout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex h-screen">
      <div
        className={`fixed top-0 left-0 h-screen backdrop-blur-lg  shadow-lg z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 sm:w-56 transition-transform duration-300`}
      >
        <Sidebar />
      </div>

      <button
        className="absolute bottom-4 right-4 sm:hidden p-4 text-2xl bg-gray-800 text-white rounded-full"
        onClick={toggleSidebar}
      >
        {!isSidebarOpen ? <FaCat />: <FaXmark />}
      </button>

      <div
        className={`flex-1 ml-0 sm:ml-56 w-full h-full overflow-auto transition-margin duration-300 ${
          isSidebarOpen ? "ml-0" : "ml-0"
        }`}
      >
        <div className="m-7">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;

