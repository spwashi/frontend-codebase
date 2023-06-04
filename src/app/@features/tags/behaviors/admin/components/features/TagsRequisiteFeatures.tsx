import React from "react";
import { TagFeatures } from "@features/tags/components/TagFeatures";
import { UserFeatures } from "@features/users/components/Features";
import { ProjectFeatures } from "@features/projects/components/ProjectFeatures";
import { appClassnames } from "@core/styles/classNames";

export function TagsRequisiteFeatures() {
  return (
    <div className={appClassnames.requirements.feature}>
      <TagFeatures />
      <UserFeatures />
      <ProjectFeatures />
    </div>
  );
}
