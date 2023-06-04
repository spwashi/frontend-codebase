import React from "react";
import { Feature } from "@widgets/feature";
import { ConceptListQuery } from "@features/concepts/services/graphql/list/components/ConceptListQuery";
import { ConceptEditForm } from "@features/concepts/behaviors/edit/components/ConceptEditForm";
import { featureIds } from "@identities/features/ids";
import { LoginRequirement } from "@features/users/behaviors/login/components/gates/LoginRequirement";

export function ConceptEditFormFeature() {
  return (
    <LoginRequirement>
      <Feature name={featureIds.concept.create_form}>
        <ConceptListQuery />
        <ConceptEditForm />
      </Feature>
    </LoginRequirement>
  );
}
