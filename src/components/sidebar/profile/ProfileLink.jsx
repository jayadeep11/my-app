import { useUser } from "@clerk/clerk-react";
import { NavLink } from "react-router-dom";
import { useClerk } from "@clerk/clerk-react";

const ProfileLink = () => {
  const { user, isSignedIn } = useUser();
  const clerk = useClerk();

  const handleClick = (e) => {
    if (!isSignedIn) {
      clerk.openSignIn({});
    }
  };

  return (
    <>
      <NavLink
        to={isSignedIn ? "/Profile" : ""}
        onClick={handleClick}
        className={({ isActive }) => `my-2 ${isActive ? "active-item" : ""}`}
      >
        <div className=" sidebar-item flex items-left">
          <div className="p-2 flex items-center space-x-4">
            <img
              src={user?.imageUrl}
              alt="Profile"
              className={`w-5 h-5 rounded-full object-cover ${isSignedIn ? "block" : "hidden"}`}
            />
            <div className="text-left">
              {isSignedIn ? (
                <h1 className="text-sm">{user?.fullName}</h1>
              ) : (
                <h1 className="cursor-pointer text-left text-sm">Sign In</h1>
              )}
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default ProfileLink;
