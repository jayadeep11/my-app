import React from "react";
import { Link } from "react-router-dom";

function SectionLink({ name, path }) {
  return (
    <li className="sidebar-item p-1">
      <Link
        to={path}
        className="text-sm text-gray-300"
      >
        {name}
      </Link>
    </li>
  );
}

export default SectionLink;
