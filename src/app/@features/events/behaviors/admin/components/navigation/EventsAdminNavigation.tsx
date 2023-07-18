import { NavLink } from "react-router-dom";
import React from "react";
import { adminRoutes, getRelativeRouterPath } from "@identities/routes";

export function EventsAdminNavigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to={getRelativeRouterPath(adminRoutes.events.subConfigMap.root)}
          >
            Event Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={getRelativeRouterPath(adminRoutes.events.subConfigMap.all)}
          >
            All Events
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
