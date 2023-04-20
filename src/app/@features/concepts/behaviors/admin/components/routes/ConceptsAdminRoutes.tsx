import { Route, Routes } from "react-router";
import { ConceptListDisplay } from "@features/concepts/services/graphql/list/components/ConceptListDisplay";
import { LoginRequirement } from "@features/users/behaviors/login/components/gates/LoginRequirement";
import { ConceptCreateFormFeature } from "@features/concepts/behaviors/create/components/ConceptCreateFormFeature";
import { ConceptEditFormFeature } from "@features/concepts/behaviors/edit/components/ConceptEditFormFeature";
import { ConceptDisplayFormFeature } from "@features/concepts/behaviors/display/components/ConceptDisplayFormFeature";
import { ConceptTagFormFeature } from "@features/concepts/behaviors/tag/components/ConceptTagFormFeature";
import React from "react";

export function ConceptsAdminRoutes() {
  return (
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
  );
}
