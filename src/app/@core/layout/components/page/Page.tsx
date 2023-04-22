import React from "react";
import { NavigationList } from "../navigation/NavigationList";
import { mainNavList } from "@/routes/links/mainLinks";

interface PageProps {
  children?: any;
}

export function Page({ children }: PageProps) {
  return (
    <article>
      <header>
        <NavigationList items={mainNavList} />
      </header>
      {children}
    </article>
  );
}
