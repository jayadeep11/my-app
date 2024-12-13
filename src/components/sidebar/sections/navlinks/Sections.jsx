import React from "react";
import SectionLink from "./SectionLink.jsx";
import { sections } from "./constants.jsx";

function Sections() {
  return (
    <div className="flex flex-col space-y-5 border-t border-b border-slate-800 py-2">
      <ul className="flex flex-col  border-slate-800">
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
