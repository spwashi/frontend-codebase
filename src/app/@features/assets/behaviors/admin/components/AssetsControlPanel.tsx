import React from "react";
import { Route, Routes } from "react-router";
import { FeatureRequirement } from "@services/features/list/components/FeatureRequirement";
import { AssetUploadFormFeature } from "../../upload/components/AssetUploadFormFeature";
import { AssetDisplayForm } from "../../display/components/AssetDisplayForm";
import { LoginRequirement } from "@features/users/behaviors/login/components/gates/LoginRequirement";
import { featureId__assets } from "../../../../../@/featureIds";
import { AssetsAdminNavigation } from "@features/assets/behaviors/admin/components/AssetsAdminNavigation";
import { AssetsRequisiteFeatures } from "@features/assets/behaviors/admin/components/AssetsRequisiteFeatures";

export function AssetsControlPanel() {
  return (
    <React.Fragment>
      <AssetsRequisiteFeatures />
      <FeatureRequirement name={featureId__assets} alternative={"Need Assets"}>
        <AssetsAdminNavigation />
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
    </React.Fragment>
  );
}
