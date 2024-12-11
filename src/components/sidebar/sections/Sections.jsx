import React from "react";
import SectionLink from "./SectionLink.jsx";
import { sections } from "./constants.js";

function Sections() {
  return (
    <div className="flex flex-col space-y-5 border-t border-b border-gray-600 py-2">
      <ul className="flex flex-col  border-gray-600">
        {sections.map((section) => (
          <SectionLink
            key={section.name}
            name={section.name}
            path={section.path}
          />
        ))}
      </ul>
    </div>
  );
}

export default Sections;
