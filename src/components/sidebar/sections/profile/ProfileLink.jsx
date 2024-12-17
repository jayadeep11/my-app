import UseLink from "../UseLink.jsx";

const ProfileLink = () => {

  const data = {
    name: "Jayadeep",
    path: "https://avatars.githubusercontent.com/u/163034023?v=4"
  }

  return (
    <UseLink
      name={data.name}
      path="/profile"
      icon={
        <img
          src={data.path}
          alt="Profile"
          className="w-5 h-5 rounded-full object-cover"
        />
      }
    />
  );
};

export default ProfileLink;
