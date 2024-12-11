import ProfileLink from "./profile/ProfileLink.jsx";
import Sections from "./sections/Sections.jsx";

const Sidebar = () => {
  return (
    <div className="flex flex-col max-[450px]:hidden   w-64 bg-transparent text-gray-300 p-3  border-r border-gray-600">
      <ProfileLink />
      <Sections />

    </div>
  );
};

export default Sidebar;
