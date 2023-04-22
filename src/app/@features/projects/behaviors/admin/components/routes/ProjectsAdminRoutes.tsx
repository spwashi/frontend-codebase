import { Route, Routes } from "react-router";
import { FeatureRequirement } from "@services/features/list/components/FeatureRequirement";
import {
  featureId__projectCreate,
  featureId__projects,
} from '@/featureIds';
import { ProjectCreateForm } from "@features/projects/behaviors/create/components/ProjectCreateForm";
import { ProjectDisplayFormFeature } from "@features/projects/behaviors/display/components/ProjectDisplayFormFeature";
import React from "react";

export function ProjectsAdminRoutes() {
  return (
    <Routes>
      <Route
        path={""}
        element={
          <FeatureRequirement
            name={featureId__projects}
            alternative={"Need Projects"}
          >
            <FeatureRequirement
              name={featureId__projectCreate}
              alternative={"Need Projects Create"}
            >
              <ProjectCreateForm />
            </FeatureRequirement>
            <ProjectDisplayFormFeature />
          </FeatureRequirement>
        }
      ></Route>
    </Routes>
  );
}
