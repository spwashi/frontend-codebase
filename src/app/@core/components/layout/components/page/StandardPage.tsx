import React from "react";
import { MainNavigation } from "@core/components/layout/components/navigation/variants/MainNavigation";

interface PageProps {
  children?: any;
}

export function StandardPage({ children }: PageProps) {
  return (
    <article>
      <header>
        <MainNavigation />
      </header>
      {children}
    </article>
  );
}
