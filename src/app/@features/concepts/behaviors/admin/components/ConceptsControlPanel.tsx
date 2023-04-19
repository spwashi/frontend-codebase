import React from "react";
import { Route, Routes } from "react-router";
import { FeatureRequirement } from "@services/features/list/components/FeatureRequirement";
import { LoginRequirement } from "@features/users/behaviors/login/components/gates/LoginRequirement";
import { ConceptListDisplay } from "../../../services/graphql/list/components/ListDisplay";
import { ConceptDisplayFormFeature } from "../../display/components/ConceptDisplayFormFeature";
import { featureId__concepts } from "../../../../../@/featureIds";
import { ConceptCreateFormFeature } from "../../create/components/ConceptCreateFormFeature";
import { ConceptEditFormFeature } from "../../edit/components/ConceptEditFormFeature";
import { ConceptTagFormFeature } from "../../tag/components/ConceptTagFormFeature";
import { ConceptsAdminNavigation } from "@features/concepts/behaviors/admin/components/ConceptsAdminNavigation";
import { ConceptsRequisiteFeatures } from "@features/concepts/behaviors/admin/components/ConceptsRequisiteFeatures";

export function ConceptsControlPanel() {
  return (
    <React.Fragment>
      <ConceptsRequisiteFeatures />
      <ConceptsAdminNavigation />
      <FeatureRequirement
        name={featureId__concepts}
        alternative={"Need Concepts"}
      >
        <Routes>
          <Route
            path={"all"}
            element={
              <div style={{ width: 500 + "px" }}>
                <ConceptListDisplay />
              </div>
            }
          />
          <Route
            path=""
            element={
              <LoginRequirement>
                <ConceptCreateFormFeature />
                <ConceptEditFormFeature />
                <ConceptDisplayFormFeature />
                <ConceptTagFormFeature />
              </LoginRequirement>
            }
          />
        </Routes>
      </FeatureRequirement>
    </React.Fragment>
  );
}
