import React, { useState } from "react";
import { Concept } from "../../../services/graphql/one";
import { Feature } from "@services/features/item/components/Feature";
import { FormWidget } from "@widgets/form/FormWidget";
import { Log } from "@core/dev/components/Log";
import { LoginRequirement } from "@features/users/behaviors/login/components/LoginRequirement";
import { FeatureRequirement } from "@services/features/list/components/FeatureRequirement";
import { form__selectConcept } from "../../select/config";
import {
  featureId__conceptDisplay,
  featureId__conceptDisplayForm,
} from "../../../../../@/featureIds";

export function ConceptDisplayFormFeature() {
  const [state, setState] = useState<any | null>();
  const id = state?.data?.concept?.id;
  return (
    <FeatureRequirement
      name={featureId__conceptDisplay}
      alternative={"Need Concepts Display"}
    >
      <LoginRequirement>
        <Feature name={featureId__conceptDisplayForm}>
          <Log>{{ id }}</Log>
          <FormWidget config={form__selectConcept} onSubmit={setState} />
          {id && <Concept id={id} />}
        </Feature>
      </LoginRequirement>
    </FeatureRequirement>
  );
}