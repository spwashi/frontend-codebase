import React from "react";
import { Route, Routes } from "react-router";
import { FeatureRequirement } from "@services/features/list/components/FeatureRequirement";
import { LoginRequirement } from "@features/users/behaviors/login/components/gates/LoginRequirement";
import { TagsDisplayFormFeature } from "../../display/components/TagsDisplayFormFeature";
import { featureId__tags } from "../../../../../@/featureIds";
import { TagCreateFormFeature } from "../../create/components/TagCreateFormFeature";
import { TagsAdminNavigation } from "@features/tags/behaviors/admin/components/TagsAdminNavigation";
import { TagsRequisiteFeatures } from "@features/tags/behaviors/admin/components/TagsRequisiteFeatures";

export function TagsControlPanel() {
  return (
    <React.Fragment>
      <TagsRequisiteFeatures />
      <TagsAdminNavigation />
      <Routes>
        <Route path="all" element={"[unimplemented]"} />
        <Route
          path=""
          element={
            <FeatureRequirement
              name={featureId__tags}
              alternative={"Need Tags"}
            >
              <LoginRequirement>
                <TagCreateFormFeature />
                <TagsDisplayFormFeature />
              </LoginRequirement>
            </FeatureRequirement>
          }
        />
      </Routes>
    </React.Fragment>
  );
}
