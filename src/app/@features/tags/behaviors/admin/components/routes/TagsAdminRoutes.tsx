import { Route, Routes } from "react-router";
import React from "react";
import { FeatureRequirement } from "@widgets/feature";
import { LoginRequirement } from "@features/users/behaviors/login/components/gates/LoginRequirement";
import { TagCreateFormFeature } from "@features/tags/behaviors/create/components/TagCreateFormFeature";
import { TagsDisplayFormFeature } from "@features/tags/behaviors/display/components/TagsDisplayFormFeature";
import { featureIds } from "@identities/features/ids";

export function TagsAdminRoutes() {
  return (
    <Routes>
      <Route path="all" element={"[unimplemented]"} />
      <Route
        path=""
        element={
          <FeatureRequirement name={featureIds.tag.tags}>
            <LoginRequirement>
              <TagCreateFormFeature />
              <TagsDisplayFormFeature />
            </LoginRequirement>
          </FeatureRequirement>
        }
      />
    </Routes>
  );
}
