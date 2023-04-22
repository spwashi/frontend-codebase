import { Route, Routes } from "react-router";
import React from "react";
import { FeatureRequirement } from "@widgets/feature";
import { ProjectCreateForm } from "@features/projects/behaviors/create/components/ProjectCreateForm";
import { ProjectDisplayFormFeature } from "@features/projects/behaviors/display/components/ProjectDisplayFormFeature";
import {
  featureId__projectCreate,
  featureId__projects,
} from "@/features/projects/ids";

export function ProjectsAdminRoutes() {
  return (
    <Routes>
      <Route
        path={""}
        element={
          <FeatureRequirement name={featureId__projects}>
            <FeatureRequirement name={featureId__projectCreate}>
              <ProjectCreateForm />
            </FeatureRequirement>
            <ProjectDisplayFormFeature />
          </FeatureRequirement>
        }
      ></Route>
    </Routes>
  );
}
