import React from "react";
import { mainNavigation } from "@junction/routes/nav";
import { Navigation } from "../navigation/Navigation";

interface PageProps {
  children?: any;
}

export function Page({ children }: PageProps) {
  return (
    <article>
      <header>
        <Navigation items={mainNavigation} />
      </header>
      {children}
    </article>
  );
}
