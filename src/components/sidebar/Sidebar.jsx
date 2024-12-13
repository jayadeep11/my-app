import ProfileLink from "./profile/ProfileLink.jsx";
import Friends from "./sections/friendslist/Friends.jsx";
import Sections from "./sections/navlinks/Sections.jsx";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-full h-screen bg-transparent text-[#192128] p-3  border-r border-slate-800">
      <ProfileLink />
      <Sections />
      <Friends />
    </div>
  );
};

export default Sidebar;
