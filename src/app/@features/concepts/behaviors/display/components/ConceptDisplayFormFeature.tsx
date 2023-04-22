import React, { useState } from "react";
import { Feature } from "@services/features/item/components/Feature";
import { FormWidget } from "@widgets/form/FormWidget";
import { FeatureRequirement } from "@services/features/list/components/FeatureRequirement";
import {
  featureId__conceptDisplay,
  featureId__conceptDisplayForm,
} from '@/featureIds';
import { IFormContextState } from "@widgets/form/context/types/state";
import { Concept } from "../../../services/graphql/one";
import { form__selectConcept } from "../../select/config";

export function ConceptDisplayFormFeature() {
  const [formState, setFormState] = useState<IFormContextState>();
  const id = formState?.currentValue?.concept?.id;
  return (
    <FeatureRequirement
      name={featureId__conceptDisplay}
      alternative={"Need Concepts Display"}
    >
      <Feature name={featureId__conceptDisplayForm}>
        <FormWidget config={form__selectConcept} onSubmit={setFormState} />
        {id && <Concept id={id} />}
      </Feature>
    </FeatureRequirement>
  );
}
