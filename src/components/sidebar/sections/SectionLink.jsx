import React from "react";
import { Link } from "react-router-dom";

function SectionLink({ name, path }) {
  return (
    <Link to={path} className="text-sm text-gray-400">
      <li className="sidebar-item p-2">{name}</li>
    </Link>
  );
}

export default SectionLink;
