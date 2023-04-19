import { AssetUploadFormFeature } from "../../upload/components/AssetUploadFormFeature";
import { AssetDisplayForm } from "../../display/components/AssetDisplayForm";
import React from "react";
import { UserFeatures } from "../../../../users/components/Features";
import { ProjectFeatures } from "../../../../projects/components/Features";
import { LoginRequirement } from "../../../../users/behaviors/login/components/gates/LoginRequirement";
import { NavLink } from "react-router-dom";
import { Route, Routes } from "react-router";
import { FeatureRequirement } from "@services/features/list/components/FeatureRequirement";
import { featureId__assets } from "../../../../../@/featureIds";

export function AssetsControlPanel() {
  return (
    <>
      <UserFeatures />
      <ProjectFeatures />
      <FeatureRequirement name={featureId__assets} alternative={"Need Assets"}>
        <nav>
          <ul>
            <li>
              <NavLink to="../assets">Asset Home</NavLink>
            </li>
            <li>
              <NavLink to="../assets/all">All Assets</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="all" element={"[unimplemented]"} />
          <Route
            path=""
            element={
              <LoginRequirement>
                <AssetUploadFormFeature />
                <AssetDisplayForm />
              </LoginRequirement>
            }
          />
        </Routes>
      </FeatureRequirement>
    </>
  );
}
