import { Route, Routes } from "react-router";
import React from "react";
import { FeatureRequirement } from "@widgets/feature";
import { LoginRequirement } from "@features/users/behaviors/login/components/gates/LoginRequirement";
import { TagCreateFormFeature } from "@features/tags/behaviors/create/components/TagCreateFormFeature";
import { TagsDisplayFormFeature } from "@features/tags/behaviors/display/components/TagsDisplayFormFeature";
import { featureIds } from "@identities/features/ids";
import { adminRoutes } from "@identities/routes/domains/adminRoutes";

export function TagsAdminRoutes() {
  return (
    <Routes>
      <Route path={adminRoutes.tags.sub.all.path} element={"[unimplemented]"} />
      <Route
        path={adminRoutes.tags.sub.root.path}
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
