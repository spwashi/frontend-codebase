import React from "react";
import { mainNavLinks } from "@identities/routes";
import { NavigationList } from "../navigation/NavigationList";

interface PageProps {
  children?: any;
}

export function Page({ children }: PageProps) {
  return (
    <article>
      <header>
        <NavigationList items={mainNavLinks} />
      </header>
      {children}
    </article>
  );
}
