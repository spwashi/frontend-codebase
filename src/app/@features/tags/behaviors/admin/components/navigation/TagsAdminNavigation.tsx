import { NavLink } from "react-router-dom";
import React from "react";
import {
  adminRoutes,
  getRouterPath_adminRelativePath,
} from "@identities/routes";

export function TagsAdminNavigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to={getRouterPath_adminRelativePath(adminRoutes.tags.sub.root)}
          >
            Tag Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={getRouterPath_adminRelativePath(adminRoutes.tags.sub.all)}
          >
            All Tags
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
