import React from "react";

export function UiStage({ children }: { children: any }) {
  return (
    <>
      <div className="stage-open" aria-hidden="true" />
      {children}
      <div className="stage-close" aria-hidden="true" />
    </>
  );
}
