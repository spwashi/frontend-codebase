import { Route, Routes } from "react-router";
import React from "react";
import { SceneListDisplay } from "@features/scenes/services/graphql/list/components/SceneListDisplay";
import { SceneListQuery } from "@features/scenes/services/graphql/list/components/SceneListQuery";
import { LoginRequirement } from "@features/users/behaviors/login/components/gates/LoginRequirement";
import { SceneCreateFormFeature } from "@features/scenes/behaviors/create/components/SceneCreateFormFeature";
import { SceneEditFormFeature } from "@features/scenes/behaviors/edit/components/SceneEditFormFeature";
import { FeatureRequirement } from "@services/features/list/components/FeatureRequirement";
import { featureId__sceneDisplay } from "@/features/ids";
import { SceneDisplayFormFeature } from "@features/scenes/behaviors/display/components/SceneDisplayFormFeature";

export function ScenesAdminRoutes() {
  return (
    <Routes>
      <Route
        path="all"
        element={
          <div style={{ width: 500 + "px" }}>
            <SceneListDisplay />
          </div>
        }
      />
      <Route
        path=""
        element={
          <React.Fragment>
            <SceneListQuery />
            <LoginRequirement>
              <SceneCreateFormFeature />
              <SceneEditFormFeature />
            </LoginRequirement>
            <FeatureRequirement name={featureId__sceneDisplay}>
              <SceneDisplayFormFeature />
            </FeatureRequirement>
          </React.Fragment>
        }
      />
    </Routes>
  );
}
