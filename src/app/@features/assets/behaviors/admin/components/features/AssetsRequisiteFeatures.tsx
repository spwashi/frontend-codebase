import React from "react";
import { UserFeatures } from "@features/users/components/Features";
import { ProjectFeatures } from "@features/projects/components/ProjectFeatures";
import { appClassnames } from "@core/styles/classNames";

export function AssetsRequisiteFeatures() {
  return (
    <div className={appClassnames.requirements.feature}>
      <UserFeatures />
      <ProjectFeatures />
    </div>
  );
}
