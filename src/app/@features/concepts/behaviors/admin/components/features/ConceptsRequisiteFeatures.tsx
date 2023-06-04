import React from "react";
import { UserFeatures } from "@features/users/components/Features";
import { ConceptFeatures } from "@features/concepts/components/ConceptFeatures";
import { TagFeatures } from "@features/tags/components/TagFeatures";
import { appClassnames } from "@core/styles/classNames";

export function ConceptsRequisiteFeatures() {
  return (
    <div className={appClassnames.requirements.feature}>
      <UserFeatures />
      <ConceptFeatures />
      <TagFeatures />
    </div>
  );
}
