import ProfileLink from "./sections/profile/ProfileLink.jsx";
import Sections from "./sections/navlinks/Sections.jsx";

const Sidebar = () => {
  return (
    <div className="flex text-gray-500 flex-col gap-1 min-h-screen border-r border-slate-800 p-2">
      <ProfileLink />
      <Sections />
    </div>
  );
};

export default Sidebar;
