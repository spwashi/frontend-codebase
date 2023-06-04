import { NavLink } from "react-router-dom";
import React from "react";
import {
  adminRoutes,
  getRouterPath_adminRelativePath,
} from "@identities/routes";

export function EventsAdminNavigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to={getRouterPath_adminRelativePath(adminRoutes.events.sub.root)}
          >
            Event Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={getRouterPath_adminRelativePath(adminRoutes.events.sub.all)}
          >
            All Events
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
