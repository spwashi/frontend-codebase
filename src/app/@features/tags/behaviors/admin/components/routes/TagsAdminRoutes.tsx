import { Route, Routes } from "react-router";
import { FeatureRequirement } from "@services/features/list/components/FeatureRequirement";
import { featureId__tags } from '@/featureIds';
import { LoginRequirement } from "@features/users/behaviors/login/components/gates/LoginRequirement";
import { TagCreateFormFeature } from "@features/tags/behaviors/create/components/TagCreateFormFeature";
import { TagsDisplayFormFeature } from "@features/tags/behaviors/display/components/TagsDisplayFormFeature";
import React from "react";

export function TagsAdminRoutes() {
  return (
    <Routes>
      <Route path="all" element={"[unimplemented]"} />
      <Route
        path=""
        element={
          <FeatureRequirement name={featureId__tags} alternative={"Need Tags"}>
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
