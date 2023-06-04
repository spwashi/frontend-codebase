import { Route, Routes } from "react-router";
import React from "react";
import { FeatureRequirement } from "@widgets/feature";
import { ProjectCreateForm } from "@features/projects/behaviors/create/components/ProjectCreateForm";
import { ProjectDisplayFormFeature } from "@features/projects/behaviors/display/components/ProjectDisplayFormFeature";
import { featureIds } from "@identities/features/ids";
import { adminRoutes, getRouterPath } from "@identities/routes";

export function ProjectsAdminRoutes() {
  return (
    <FeatureRequirement name={featureIds.project.projects}>
      <Routes>
        <Route
          path={getRouterPath(adminRoutes.projects.sub.root)}
          element={
            <React.Fragment>
              <FeatureRequirement name={featureIds.project.create}>
                <ProjectCreateForm />
              </FeatureRequirement>
              <ProjectDisplayFormFeature />
            </React.Fragment>
          }
        ></Route>
      </Routes>
    </FeatureRequirement>
  );
}
