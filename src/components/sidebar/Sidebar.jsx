import ProfileLink from "./profile/ProfileLink.jsx";
import Friends from "./sections/friendslist/Friends.jsx";
import Sections from "./sections/navlinks/Sections.jsx";

const Sidebar = () => {
  return (
    <div className="flex flex-col max-[450px]:hidden w-56 h-screen bg-transparent text-[#192128] p-3  border-r border-gray-600">
      <ProfileLink />
      <Sections />
      <Friends />
    </div>
  );
};

export default Sidebar;
