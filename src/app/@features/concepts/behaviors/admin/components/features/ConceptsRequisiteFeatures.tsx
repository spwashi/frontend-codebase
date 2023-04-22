import React from "react";
import { UserFeatures } from "@features/users/components/Features";
import { ConceptFeatures } from "@features/concepts/components/ConceptFeatures";
import { TagFeatures } from "@features/tags/components/TagFeatures";

export function ConceptsRequisiteFeatures() {
  return (
    <>
      <UserFeatures />
      <ConceptFeatures />
      <TagFeatures />
    </>
  );
}
