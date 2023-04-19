import { NavLink } from "react-router-dom";
import React from "react";

export function TagsAdminNavigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="../tags">Tag Home</NavLink>
        </li>
        <li>
          <NavLink to="../tags/all">All Tags</NavLink>
        </li>
      </ul>
    </nav>
  );
}
