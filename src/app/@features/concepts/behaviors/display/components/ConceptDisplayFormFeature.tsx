import React, { useState } from "react";
import { Feature } from "@widgets/feature";
import { FormWidget } from "@widgets/form/FormWidget";
import { FeatureRequirement } from "@widgets/feature";
import { IFormContextState } from "@widgets/form/context/types/state";
import { Concept } from "../../../services/graphql/one";
import { form__selectConcept } from "../../select/config";
import {
  featureId__conceptDisplay,
  featureId__conceptDisplayForm,
} from "@/features/concepts/ids";

export function ConceptDisplayFormFeature() {
  const [formState, setFormState] = useState<IFormContextState>();
  const id = formState?.currentValue?.concept?.id;
  return (
    <FeatureRequirement name={featureId__conceptDisplay}>
      <Feature name={featureId__conceptDisplayForm}>
        <FormWidget config={form__selectConcept} onSubmit={setFormState} />
        {id && <Concept id={id} />}
      </Feature>
    </FeatureRequirement>
  );
}
