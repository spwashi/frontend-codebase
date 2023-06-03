import React from "react";
import { NavigationList } from "../navigation/NavigationList";
import { routeHasHref } from "@identities/routes/helpers/routeHasHref";
import { mainRoutes } from "@identities/routes";

interface PageProps {
  children?: any;
}

export function Page({ children }: PageProps) {
  return (
    <article>
      <header>
        <NavigationList
          items={Object.values(mainRoutes).filter(routeHasHref)}
        />
      </header>
      {children}
    </article>
  );
}
