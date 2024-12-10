import { Link } from "react-router-dom";

const ProfileLink = () => {
  return (
    <div>
      <Link to="/profile" className=" text-sm">
        <div className="mb-6 flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/50"
            alt="Profile"
            className="w-6 h-6 rounded-full object-cover"
          />
          <div>
            <h1>Jayadeep</h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProfileLink;
