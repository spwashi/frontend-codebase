import { NavLink } from "react-router-dom";
import React from "react";

export function ConceptsAdminNavigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="../concepts">Concept Home</NavLink>
        </li>
        <li>
          <NavLink to="../concepts/all">All Concepts</NavLink>
        </li>
      </ul>
    </nav>
  );
}
