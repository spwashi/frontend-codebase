import React from "react";
import { mainNavigation } from "@junction/routes/nav";
import { NavigationList } from "../navigation/NavigationList";

interface PageProps {
  children?: any;
}

export function Page({ children }: PageProps) {
  return (
    <article>
      <header>
        <NavigationList items={mainNavigation} />
      </header>
      {children}
    </article>
  );
}
