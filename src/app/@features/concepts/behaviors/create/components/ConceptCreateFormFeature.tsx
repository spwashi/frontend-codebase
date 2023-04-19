import React from "react";
import { LoginRequirement } from "@features/users/behaviors/login/components/gates/LoginRequirement";
import { Feature } from "@services/features/item/components/Feature";
import { ConceptCreateForm } from "@features/concepts/behaviors/create/components/ConceptCreateForm";
import { featureId__conceptCreateForm } from "../../../../../@/featureIds";

export function ConceptCreateFormFeature() {
  return (
    <LoginRequirement>
      <Feature name={featureId__conceptCreateForm}>
        <ConceptCreateForm />
      </Feature>
    </LoginRequirement>
  );
}
