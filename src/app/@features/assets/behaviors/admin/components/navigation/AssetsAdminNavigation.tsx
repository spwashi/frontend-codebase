import { NavLink } from "react-router-dom";
import React from "react";

export function AssetsAdminNavigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="../assets">Asset Home</NavLink>
        </li>
        <li>
          <NavLink to="../assets/all">All Assets</NavLink>
        </li>
      </ul>
    </nav>
  );
}
