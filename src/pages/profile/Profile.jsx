import Header from "./Header.jsx";
import Options from "./Options.jsx";

const Profile = () => {

  return (
    <div className="flex flex-col justify-center items-center w-full gap-10">
      <div className="w-full">
        <Header username="Neha" />
      </div>
    <div className="w-full">
      <Options />
    </div>
    </div>
  );
};

export default Profile;
