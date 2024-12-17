import React from "react";
import { sections } from "./constants.jsx";
import UseLink from "../UseLink.jsx";

function Sections() {
  return (
    <div className="flex flex-col space-y-5 border-t border-slate-800">
      <ul className="flex flex-col  border-gray-600 space-y-1 mt-1">
        {sections.map((section) => (
          <UseLink
            key={section.name}
            name={section.name}
            path={section.path}
            icon={section.icon}
          />
        ))}
      </ul>
    </div>
  );
}

export default Sections;
