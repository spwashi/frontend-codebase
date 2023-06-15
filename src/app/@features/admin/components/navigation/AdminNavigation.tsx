import { Routes } from "react-router-dom";
import { Route } from "react-router";
import React from "react";
import { NavigationList } from "@core/layout/components/navigation/components/NavigationList";

import { adminRoutes, getRouterPath } from "@identities/routes";
import { IRouteConfigMap } from "@identities/routes/types/linkConfig";
import { routeHasHref } from "@identities/routes/helpers/routeHasHref";

export function AdminNavigation() {
  return (
    <Routes>
      <Route
        path={getRouterPath(adminRoutes.root)}
        element={
          <nav className="admin--nav">
            <NavigationList
              items={Object.values(adminRoutes as IRouteConfigMap).filter(
                routeHasHref
              )}
            />
          </nav>
        }
      />
    </Routes>
  );
}
