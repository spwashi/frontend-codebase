import { NavLink } from "react-router-dom";
import React from "react";
import { adminRoutes, getRelativeRouterPath } from "@identities/routes";

export function AssetsAdminNavigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to={getRelativeRouterPath(adminRoutes.assets.subConfigMap.root)}
          >
            Asset Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={getRelativeRouterPath(adminRoutes.assets.subConfigMap.all)}
          >
            All Assets
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
