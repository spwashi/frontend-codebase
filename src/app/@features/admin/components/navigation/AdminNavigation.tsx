import { Routes } from "react-router-dom";
import { Route } from "react-router";
import React from "react";
import { adminPaths } from "@junction/routes/routes";
import { adminNavigation } from "@junction/routes/nav";
import { NavigationList } from "@core/layout/components/navigation/NavigationList";

export function AdminNavigation() {
  return (
    <Routes>
      <Route
        path={adminPaths.admin._path}
        element={
          <nav className="admin">
            <NavigationList items={adminNavigation} />
          </nav>
        }
      />
    </Routes>
  );
}
