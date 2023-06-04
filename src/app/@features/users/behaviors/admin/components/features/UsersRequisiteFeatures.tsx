import React from "react";
import { ProjectFeatures } from "@features/projects/components/ProjectFeatures";
import { UserFeatures } from "@features/users/components/Features";
import { appClassnames } from "@core/styles/classNames";

export function UsersRequisiteFeatures() {
  return (
    <div className={appClassnames.requirements.feature}>
      <ProjectFeatures />
      <UserFeatures />
    </div>
  );
}
