import { UserFeatures } from "@features/users/components/Features";
import { ConceptFeatures } from "@features/concepts/components/Features";
import { TagFeatures } from "@features/tags/components/Features";
import React from "react";

export function ConceptsRequisiteFeatures() {
  return (
    <>
      <UserFeatures />
      <ConceptFeatures />
      <TagFeatures />
    </>
  );
}
