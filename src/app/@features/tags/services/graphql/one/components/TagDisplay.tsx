import React from "react";
import { useActiveTag } from "@features/tags/context/hooks/useActiveTag";

export function TagDisplay() {
  const tag = useActiveTag();
  if (!tag) return null;

  const { title, domain } = tag;
  return (
    <>
      <details open>
        <summary>{title}</summary>
        <section>
          <div>{title}</div>
          <div>{domain}</div>
        </section>
      </details>
    </>
  );
}
