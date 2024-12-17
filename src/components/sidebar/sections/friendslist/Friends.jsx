import React from "react";
import SectionLink from "./FriendLink.jsx";
import { sections } from "./constants.jsx";
import NavLinkk from "../NavLinkk.jsx";

function Friends() {
  return (
    <>
      <h1 className="text-sm font-semibold p-2 text-neutral-400">Friends</h1>

      <div className="flex flex-col space-y-5 border-b border-gray-600 py-2">
        <ul className="flex flex-col  border-gray-600 gap-5">
          {sections.map((section) => (
            <NavLinkk
              key={section.name}
              name={section.name}
              path={section.path}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Friends;
