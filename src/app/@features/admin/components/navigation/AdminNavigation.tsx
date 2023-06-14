import { Routes } from "react-router-dom";
import { Route } from "react-router";
import React from "react";
import { NavigationList } from "@core/layout/components/navigation/NavigationList";

import { adminRoutes, getRouterPath } from "@identities/routes";
import { INavLinkConfigMap } from "@identities/routes/types/linkConfig";
import { routeHasHref } from "@identities/routes/helpers/routeHasHref";

export function AdminNavigation() {
  return (
    <Routes>
      <Route
        path={getRouterPath(adminRoutes.root)}
        element={
          <nav className="admin--nav">
            <NavigationList
              items={Object.values(adminRoutes as INavLinkConfigMap).filter(
                routeHasHref
              )}
            />
          </nav>
        }
      />
    </Routes>
  );
}
