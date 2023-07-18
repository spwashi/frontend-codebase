import { Route, Routes } from "react-router";
import React from "react";
import { SceneListDisplay } from "@features/scenes/services/graphql/list/components/SceneListDisplay";
import { SceneListQuery } from "@features/scenes/services/graphql/list/components/SceneListQuery";
import { LoginRequirement } from "@features/users/behaviors/login/components/gates/LoginRequirement";
import { SceneCreateFormFeature } from "@features/scenes/behaviors/create/components/SceneCreateFormFeature";
import { SceneEditFormFeature } from "@features/scenes/behaviors/edit/components/SceneEditFormFeature";
import { FeatureRequirement } from "@widgets/feature";
import { SceneDisplayFormFeature } from "@features/scenes/behaviors/display/components/SceneDisplayFormFeature";
import { featureIds } from "@identities/features/ids";
import { adminRoutes } from "@identities/routes/domains/adminRoutes";
import { getRouterPath } from "@identities/routes";

export function ScenesAdminRoutes() {
  return (
    <FeatureRequirement name={featureIds.scene.scenes}>
      <Routes>
        <Route
          path={getRouterPath(adminRoutes.scenes.subConfigMap.all)}
          element={
            <div style={{ width: 500 + "px" }}>
              <SceneListDisplay />
            </div>
          }
        />
        <Route
          path={getRouterPath(adminRoutes.scenes.subConfigMap.root)}
          element={
            <React.Fragment>
              <SceneListQuery />
              <SceneCreateFormFeature />
              <SceneEditFormFeature />
              <SceneDisplayFormFeature />
            </React.Fragment>
          }
        />
      </Routes>
    </FeatureRequirement>
  );
}
