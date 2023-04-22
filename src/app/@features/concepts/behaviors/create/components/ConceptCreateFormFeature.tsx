import React from "react";
import { LoginRequirement } from "@features/users/behaviors/login/components/gates/LoginRequirement";
import { Feature } from "@widgets/feature";
import { ConceptCreateForm } from "@features/concepts/behaviors/create/components/ConceptCreateForm";

import { featureId__conceptCreateForm } from "@/features/concepts/ids";

export function ConceptCreateFormFeature() {
  return (
    <LoginRequirement>
      <Feature name={featureId__conceptCreateForm}>
        <ConceptCreateForm />
      </Feature>
    </LoginRequirement>
  );
}
