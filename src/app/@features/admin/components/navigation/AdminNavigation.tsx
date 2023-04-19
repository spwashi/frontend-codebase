import { NavLink, Routes } from "react-router-dom";
import { Route } from "react-router";
import React from "react";
import { adminPaths } from "@junction/routes/routes";
import { adminNavigation } from "@junction/routes/nav";

export function AdminNavigation() {
  return (
    <Routes>
      <Route
        path={adminPaths.admin._path}
        element={
          <>
            <nav className="admin">
              <ul>
                {adminNavigation.map((link) => (
                  <li key={link.href}>
                    <NavLink to={link.href}>{link.title}</NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </>
        }
      />
    </Routes>
  );
}