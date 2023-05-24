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
import { adminRoutes } from "@identities/routes/links/adminRoutes";

export function ScenesAdminRoutes() {
  return (
    <Routes>
      <Route
        path={adminRoutes.scenes.sub.all.path}
        element={
          <div style={{ width: 500 + "px" }}>
            <SceneListDisplay />
          </div>
        }
      />
      <Route
        path={adminRoutes.scenes.sub.root.path}
        element={
          <React.Fragment>
            <SceneListQuery />
            <LoginRequirement>
              <SceneCreateFormFeature />
              <SceneEditFormFeature />
            </LoginRequirement>
            <FeatureRequirement name={featureIds.scene.display}>
              <SceneDisplayFormFeature />
            </FeatureRequirement>
          </React.Fragment>
        }
      />
    </Routes>
  );
}
