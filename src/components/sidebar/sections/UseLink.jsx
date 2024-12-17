import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";

// every section use this link
function NavLinkk({ name, path, icon = <FaHome className="" /> }) {
  return (
    <NavLink
      key={name}
      to={path}
      className={({ isActive }) =>
        `text-sm font-regular flex ${isActive ? "active-item" : ""}`
      }
    >
      <li
        key={name}
        className="sidebar-item flex gap-3 p-2 items-center  w-full"
      >
        <span className="">{icon}</span>

        <span className="">{name}</span>
      </li>
    </NavLink>
  );
}

export default NavLinkk;
