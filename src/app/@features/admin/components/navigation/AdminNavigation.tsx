import { Routes } from "react-router-dom";
import { Route } from "react-router";
import React from "react";
import { NavigationList } from "@core/layout/components/navigation/NavigationList";

import { adminNavLinks } from "@/routes";
import { routes } from "@/routes/routes";

export function AdminNavigation() {
  return (
    <Routes>
      <Route
        path={routes.admin.path}
        element={
          <nav className="admin">
            <NavigationList items={adminNavLinks} />
          </nav>
        }
      />
    </Routes>
  );
}
