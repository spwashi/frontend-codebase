import React from "react";
import { ProjectFeatures } from "@features/projects/components/ProjectFeatures";
import { appClassnames } from "@core/styles/classNames";

export function ProjectsRequisiteFeatures() {
  return (
    <div className={appClassnames.requirements.feature}>
      <ProjectFeatures />
    </div>
  );
}
