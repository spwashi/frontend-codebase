import React from "react";
import { Route, Routes } from "react-router";
import { ListDisplay } from "@features/scenes/services/graphql/list/components/ListDisplay";
import { ListQuery } from "@features/scenes/services/graphql/list/components/ListQuery";
import { FeatureRequirement } from "@services/features/list/components/FeatureRequirement";
import { LoginRequirement } from "@features/users/behaviors/login/components/gates/LoginRequirement";
import { SceneCreateFormFeature } from "@features/scenes/behaviors/create/components/SceneCreateFormFeature";
import { SceneEditFormFeature } from "@features/scenes/behaviors/edit/components/SceneEditFormFeature";
import {
  featureId__sceneDisplay,
  featureId__scenes,
} from "../../../../../@/featureIds";
import { SceneDisplayFormFeature } from "../../display/components/SceneDisplayFormFeature";
import { ScenesAdminNavigation } from "@features/scenes/behaviors/admin/components/ScenesAdminNavigation";
import { ScenesRequisiteFeatures } from "@features/scenes/behaviors/admin/components/ScenesRequisiteFeatures";

export function ScenesControlPanel() {
  return (
    <React.Fragment>
      <ScenesRequisiteFeatures />
      <ScenesAdminNavigation />
      <FeatureRequirement name={featureId__scenes} alternative={"Need Scenes"}>
        <Routes>
          <Route
            path="all"
            element={
              <div style={{ width: 500 + "px" }}>
                <ListDisplay />
              </div>
            }
          />
          <Route
            path=""
            element={
              <React.Fragment>
                <ListQuery />
                <LoginRequirement>
                  <SceneCreateFormFeature />
                  <SceneEditFormFeature />
                </LoginRequirement>
                <FeatureRequirement
                  name={featureId__sceneDisplay}
                  alternative={"Need Scene Display"}
                >
                  <SceneDisplayFormFeature />
                </FeatureRequirement>
              </React.Fragment>
            }
          />
        </Routes>
      </FeatureRequirement>
    </React.Fragment>
  );
}
