import { NavLink } from "react-router-dom";
import React from "react";

export function ScenesAdminNavigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="../scenes">Scene Home</NavLink>
        </li>
        <li>
          <NavLink to="../scenes/all">All Scenes</NavLink>
        </li>
      </ul>
    </nav>
  );
}
