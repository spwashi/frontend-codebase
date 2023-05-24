import { Routes } from "react-router-dom";
import { Route } from "react-router";
import React from "react";
import { NavigationList } from "@core/layout/components/navigation/NavigationList";

import { adminNavLinks } from "@identities/routes";
import { routerCategories } from "@identities/routes/routerCategories";

export function AdminNavigation() {
  return (
    <Routes>
      <Route
        path={routerCategories.admin.path}
        element={
          <nav className="admin">
            <NavigationList items={adminNavLinks} />
          </nav>
        }
      />
    </Routes>
  );
}
