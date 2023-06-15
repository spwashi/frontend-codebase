import { NavigationList } from "@core/layout/components/navigation/components/NavigationList";
import { mainRoutes } from "@identities/routes";
import React from "react";

export function MainNavigation() {
  return (
    <nav id="main-nav">
      <NavigationList items={Object.values(mainRoutes)} />
    </nav>
  );
}
