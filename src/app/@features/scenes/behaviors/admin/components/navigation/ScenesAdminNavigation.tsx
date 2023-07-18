import { NavLink } from "react-router-dom";
import React from "react";
import { adminRoutes, getRelativeRouterPath } from "@identities/routes";

export function ScenesAdminNavigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to={getRelativeRouterPath(adminRoutes.scenes.subConfigMap.root)}
          >
            Scene Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={getRelativeRouterPath(adminRoutes.scenes.subConfigMap.all)}
          >
            All Scenes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
