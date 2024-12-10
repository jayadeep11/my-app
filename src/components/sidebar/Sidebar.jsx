import { Link } from "react-router-dom";
import ProfileLink from "./profile/ProfileLink";

const Sidebar = () => {
  return (
    <div className="w-64 bg-transparent text-gray-300 p-5 border-r border-gray-600">
      <ProfileLink />
      <h2 className="text-2xl font-bold">My App</h2>
      <ul className="mt-4 space-y-2">
        <li>
          <Link to="/" className="block py-2 hover:bg-gray-600 hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="block py-2 hover:bg-gray-600 hover:underline"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="block py-2 hover:bg-gray-600 hover:underline"
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className="mt-6">
        <h3 className="text-lg font-semibold border-b-2 pb-2 border-gray-600">
          Technologies
        </h3>
        <ul className="mt-4 space-y-2">
          <li>
            <Link
              to="/linux"
              className="block py-2 hover:bg-gray-600 hover:underline"
            >
              Linux
            </Link>
          </li>
          <li>
            <Link
              to="/docker"
              className="block py-2 hover:bg-gray-600 hover:underline"
            >
              Docker
            </Link>
          </li>
          <li>
            <Link
              to="/neovim"
              className="block py-2 hover:bg-gray-600 hover:underline"
            >
              Neovim
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
