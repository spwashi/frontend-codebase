import { UserFeatures } from "@features/users/components/Features";
import { ConceptFeatures } from "@features/concepts/components/ConceptFeatures";
import { TagFeatures } from "@features/tags/components/TagFeatures";
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
