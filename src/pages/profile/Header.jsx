const Header = () => {
  const user = {
    name: "Jayadeep",
    path: "https://avatars.githubusercontent.com/u/163034023?v=4"
    
  }
  return (
      <div className="flex flex-col opacity-90">
      <div className="flex sm:flex-row flex-col items-center gap-10">
        <img
          src={user.path}
          alt="Profile"
          className="w-24 h-24 rounded-full opacity-80 object-cover"
        />
        <div className="flex flex-col gap-1 sm:items-start items-center">
          <h1 className="text-xl font-bold">{user.name}</h1>
          <p className="text-gray-400">{user.name}</p>
          <div className="flex gap-5 mt-5 items-center">
            <button
              className="border p-2 rounded border-b hover:bg-cyan-800 hover:text-white border-slate-700 text-cyan-200 text-opacity-60"
            >
              Sign Out
            </button>
            <button className="border p-2 rounded border-b border-slate-700 text-cyan-200 text-opacity-60">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>);
};

export default Header;
