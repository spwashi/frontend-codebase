import { NavLink } from "react-router-dom";
import React from "react";
import {
  adminRoutes,
  getRouterPath_adminRelativePath,
} from "@identities/routes";

export function AssetsAdminNavigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to={getRouterPath_adminRelativePath(adminRoutes.assets.sub.root)}
          >
            Asset Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={getRouterPath_adminRelativePath(adminRoutes.assets.sub.all)}
          >
            All Assets
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
