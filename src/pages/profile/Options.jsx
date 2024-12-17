import React, { useState } from "react";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Settings";

const pages = {
  FavWebsites: Page1,
  Projects: Page2,
  Settings: Page3,
};

function Options() {
  const [activePage, setActivePage] = useState("Settings");

  // Dynamically select the active component
  const ActiveComponent = pages[activePage];

  return (
    <>
      <div className="min-h-5 flex items-start justify-start min-w-full border-b border-slate-800 ">
        <ul className="flex gap-2 text-md text-[#848D99]">
          {Object.keys(pages).map((page) => (
            <li
              key={page}
              className={`cursor-pointer px-2 py-2 ${
                activePage === page ? "text-white border-b" : ""
              }`}
              onClick={() => setActivePage(page)}
            >
            {page}
            </li>
          ))}
        </ul>
      </div>

      <div className="p-1">
        <ActiveComponent /> {/* Render the active component */}
      </div>
    </>
  );
}

export default Options;
