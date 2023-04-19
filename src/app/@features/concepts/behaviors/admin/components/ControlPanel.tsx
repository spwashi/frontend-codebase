import React from "react";
import { ConceptFeatures } from "../../../components/Features";
import { ConceptDisplayFormFeature } from "../../display/components/ConceptDisplayFormFeature";
import { ConceptListDisplay } from "../../../services/graphql/list/components/ListDisplay";
import { Route, Routes } from "react-router";
import { NavLink } from "react-router-dom";
import { TagFeatures } from "@features/tags/components/Features";
import { UserFeatures } from "@features/users/components/Features";
import { FeatureRequirement } from "@services/features/list/components/FeatureRequirement";
import { LoginRequirement } from "@features/users/behaviors/login/components/LoginRequirement";
import { featureId__concepts } from "../../../../../@/featureIds";
import { ConceptCreateFormFeature } from "../../create/components/ConceptCreateFormFeature";
import { ConceptEditFormFeature } from "../../edit/components/ConceptEditFormFeature";
import { ConceptTagFormFeature } from "../../tag/components/ConceptTagFormFeature";

export function ConceptsControlPanel() {
  return (
    <React.Fragment>
      <UserFeatures />
      <ConceptFeatures />
      <TagFeatures />
      <nav>
        <ul>
          <li>
            <NavLink to="../concepts">Concept Home</NavLink>
          </li>
          <li>
            <NavLink to="../concepts/all">All Concepts</NavLink>
          </li>
        </ul>
      </nav>
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
