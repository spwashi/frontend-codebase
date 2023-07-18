import { NavLink } from "react-router-dom";
import React from "react";
import { adminRoutes, getRelativeRouterPath } from "@identities/routes";

export function ConceptsAdminNavigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to={getRelativeRouterPath(adminRoutes.concepts.subConfigMap.root)}
          >
            Concept Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={getRelativeRouterPath(adminRoutes.concepts.subConfigMap.all)}
          >
            All Concepts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
