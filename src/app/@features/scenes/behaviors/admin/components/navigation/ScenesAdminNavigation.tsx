import { NavLink } from "react-router-dom";
import React from "react";
import { adminRoutes, getRelativeRouterPath } from "@identities/routes";

export function ScenesAdminNavigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={getRelativeRouterPath(adminRoutes.scenes.sub.root)}>
            Scene Home
          </NavLink>
        </li>
        <li>
          <NavLink to={getRelativeRouterPath(adminRoutes.scenes.sub.all)}>
            All Scenes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
