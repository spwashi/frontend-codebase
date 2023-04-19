import React from "react";
import { SceneFeatures } from "../../../components/Features";
import { SceneDisplayFormFeature } from "../../display/components/SceneDisplayFormFeature";
import { ListDisplay } from "@features/scenes/services/graphql/list/components/ListDisplay";
import { Route, Routes } from "react-router";
import { NavLink } from "react-router-dom";
import { TagFeatures } from "@features/tags/components/Features";
import { UserFeatures } from "@features/users/components/Features";
import { ListQuery } from "@features/scenes/services/graphql/list/components/ListQuery";
import { FeatureRequirement } from "@services/features/list/components/FeatureRequirement";
import { LoginRequirement } from "@features/users/behaviors/login/components/LoginRequirement";
import {
  featureId__sceneDisplay,
  featureId__scenes,
} from "../../../../../@/featureIds";
import { SceneCreateFormFeature } from "@features/scenes/behaviors/create/components/SceneCreateFormFeature";
import { SceneEditFormFeature } from "@features/scenes/behaviors/edit/components/SceneEditFormFeature";

export function ScenesControlPanel() {
  return (
    <React.Fragment>
      <UserFeatures /> <SceneFeatures /> <TagFeatures />
      <nav>
        <ul>
          <li>
            <NavLink to="../scenes">Scene Home</NavLink>
          </li>
          <li>
            <NavLink to="../scenes/all">All Scenes</NavLink>
          </li>
        </ul>
      </nav>
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
