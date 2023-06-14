import { NavLink } from "react-router-dom";
import React from "react";
import { adminRoutes, getRelativeRouterPath } from "@identities/routes";

export function UsersAdminNavigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={getRelativeRouterPath(adminRoutes.users.sub.root)}>
            User Home
          </NavLink>
        </li>
        <li>
          <NavLink to={getRelativeRouterPath(adminRoutes.users.sub.all)}>
            All Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
