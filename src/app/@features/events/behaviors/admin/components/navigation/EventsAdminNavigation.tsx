import { NavLink } from "react-router-dom";
import React from "react";
import { adminRoutes, getRelativeRouterPath } from "@identities/routes";

export function EventsAdminNavigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={getRelativeRouterPath(adminRoutes.events.sub.root)}>
            Event Home
          </NavLink>
        </li>
        <li>
          <NavLink to={getRelativeRouterPath(adminRoutes.events.sub.all)}>
            All Events
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
