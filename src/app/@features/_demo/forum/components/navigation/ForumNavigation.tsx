import { NavigationList } from "@core/components/layout/components/navigation/components/NavigationList";
import { forumRoutes } from "@identities/routes";
import React from "react";

export function ForumNavigation() {
  return (
    <nav id="main-nav">
      <NavigationList items={Object.values(forumRoutes)} />
    </nav>
  );
}
