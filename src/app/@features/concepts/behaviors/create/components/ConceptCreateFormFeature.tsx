import React from "react";
import { LoginRequirement } from "@features/users/behaviors/login/components/gates/LoginRequirement";
import { Feature } from "@widgets/feature";
import { ConceptCreateForm } from "@features/concepts/behaviors/create/components/ConceptCreateForm";
import { featureIds } from "@/features/ids";

export function ConceptCreateFormFeature() {
  return (
    <LoginRequirement>
      <Feature name={featureIds.concept.create_form}>
        <ConceptCreateForm />
      </Feature>
    </LoginRequirement>
  );
}
