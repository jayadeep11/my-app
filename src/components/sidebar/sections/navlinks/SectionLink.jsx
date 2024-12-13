import React from "react";
import { NavLink } from "react-router-dom";

function SectionLink({ name, path }) {
  return (
    <NavLink to={path} className={({isActive}) =>
           `sidebar-item text-sm m-1 text-slate-600 ${isActive ? "active-item" : ""}` }>
      <li className="sidebar-item p-2">{name}</li>
    </NavLink>
  );
}

export default SectionLink;
