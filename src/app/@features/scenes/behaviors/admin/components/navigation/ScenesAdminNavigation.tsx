import { NavLink } from "react-router-dom";
import React from "react";
import {
  adminRoutes,
  getRouterPath_adminRelativePath,
} from "@identities/routes";

export function ScenesAdminNavigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to={getRouterPath_adminRelativePath(adminRoutes.scenes.sub.root)}
          >
            Scene Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={getRouterPath_adminRelativePath(adminRoutes.scenes.sub.all)}
          >
            All Scenes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
