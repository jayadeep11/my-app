import { useUser, useClerk } from "@clerk/clerk-react";

const Profile = () => {
  const { user } = useUser();
  const clerk = useClerk();
  return (
    <div className="flex flex-col gap-4 mt-4 opacity-90">
      <div className="flex sm:flex-row flex-col items-center gap-10 pb-10 border-b border-slate-800">
        <img
          src={user?.imageUrl}
          alt="Profile"
          className="w-24 h-24 rounded-full opacity-70 object-cover"
        />
        <div className="flex flex-col gap-2 sm:items-start items-center">
          <h1 className="text-xl font-bold">{user?.fullName}</h1>
          <p className="text-gray-400">{user?.id}</p>
          <div className="flex gap-5 mt-5 items-center">
            <button
              onClick={() => clerk.signOut()}
              className="border p-2 rounded border-b border-slate-700 text-cyan-200 text-opacity-60"
            >
              Sign Out
            </button>
            <button className="border p-2 rounded border-b border-slate-700 text-cyan-200 text-opacity-60">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
