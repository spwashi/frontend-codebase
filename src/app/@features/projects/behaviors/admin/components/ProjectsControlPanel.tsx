import React from "react";
import { ProjectListQuery } from "../../../services/graphql/list/components/ListQuery";
import { ProjectsRequisiteFeatures } from "@features/projects/behaviors/admin/components/features/ProjectsRequisiteFeatures";
import { ProjectsAdminRoutes } from "@features/projects/behaviors/admin/components/routes/ProjectsAdminRoutes";

export function ProjectsControlPanel() {
  return (
    <React.Fragment>
      <ProjectListQuery />
      <ProjectsRequisiteFeatures />
      {<ProjectsAdminRoutes></ProjectsAdminRoutes>}
    </React.Fragment>
  );
}
