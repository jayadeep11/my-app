import { Link } from "react-router-dom";

const ProfileLink = () => {
  return (
    <div className="mb-2 sidebar-item flex items-center">
      <Link to="/profile" className=" text-sm  ">
        <div className=" p-2 flex items-center space-x-4">
          <img
            src="https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?q=80&w=3035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile"
            className="w-5 h-5 rounded-full object-cover"
          />
          <div>
            <h1>Neha</h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProfileLink;
