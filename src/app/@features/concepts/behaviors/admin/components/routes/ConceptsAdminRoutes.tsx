import { Route, Routes } from "react-router";
import React from "react";
import { ConceptListDisplay } from "@features/concepts/services/graphql/list/components/ConceptListDisplay";
import { ConceptCreateFormFeature } from "@features/concepts/behaviors/create/components/ConceptCreateFormFeature";
import { ConceptEditFormFeature } from "@features/concepts/behaviors/edit/components/ConceptEditFormFeature";
import { ConceptDisplayFormFeature } from "@features/concepts/behaviors/display/components/ConceptDisplayFormFeature";
import { ConceptTagFormFeature } from "@features/concepts/behaviors/tag/components/ConceptTagFormFeature";
import { adminRoutes } from "@identities/routes/domains/adminRoutes";
import { getRouterPath } from "@identities/routes";
import { featureIds } from "@identities/features/ids";
import { FeatureRequirement } from "@widgets/feature";

export function ConceptsAdminRoutes() {
  return (
    <FeatureRequirement name={featureIds.concept.concepts}>
      <Routes>
        <Route
          path={getRouterPath(adminRoutes.concepts.sub.all)}
          element={<ConceptListDisplay />}
        />
        <Route
          path={getRouterPath(adminRoutes.concepts.sub.root)}
          element={
            <React.Fragment>
              <ConceptCreateFormFeature />
              <ConceptEditFormFeature />
              <ConceptDisplayFormFeature />
              <ConceptTagFormFeature />
            </React.Fragment>
          }
        />
      </Routes>
    </FeatureRequirement>
  );
}
