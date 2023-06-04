import React from "react";
import { ProjectsRequisiteFeatures } from "@features/projects/behaviors/admin/components/features/ProjectsRequisiteFeatures";
import { ProjectsAdminRoutes } from "@features/projects/behaviors/admin/components/routes/ProjectsAdminRoutes";
import { ProjectListQuery } from "../../../services/graphql/list/components/ListQuery";
import { FeatureRequirement } from "@widgets/feature";
import { featureIds } from "@identities/features/ids";

export function ProjectsControlPanel() {
  return (
    <FeatureRequirement name={featureIds.project.projects}>
      <ProjectsRequisiteFeatures />
      <ProjectListQuery />
      <ProjectsAdminRoutes />
    </FeatureRequirement>
  );
}
