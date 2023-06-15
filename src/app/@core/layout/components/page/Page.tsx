import React from "react";
import { MainNavigation } from "@core/layout/components/navigation/variants/MainNavigation";

interface PageProps {
  children?: any;
}

export function Page({ children }: PageProps) {
  return (
    <article>
      <header>
        <MainNavigation />
      </header>
      {children}
    </article>
  );
}
