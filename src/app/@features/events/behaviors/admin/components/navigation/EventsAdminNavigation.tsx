import { NavLink } from "react-router-dom";
import React from "react";

export function EventsAdminNavigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="../events">Event Home</NavLink>
        </li>
        <li>
          <NavLink to="../events/all">All Events</NavLink>
        </li>
      </ul>
    </nav>
  );
}
