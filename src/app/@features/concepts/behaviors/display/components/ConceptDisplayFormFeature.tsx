import React, { useState } from "react";
import { Feature, FeatureRequirement } from "@widgets/feature";
import { FormWidget } from "@widgets/form/FormWidget";
import { IFormContextState } from "@widgets/form/context/types/state";
import { Concept } from "../../../services/graphql/one";
import { form__selectConcept } from "../../select/config";
import { featureIds } from "@identities/features/ids";

export function ConceptDisplayFormFeature() {
  const [formState, setFormState] = useState<IFormContextState>();
  const id = formState?.currentValue?.concept?.id;
  return (
    <FeatureRequirement name={featureIds.concept.display}>
      <Feature name={featureIds.concept.display_form}>
        <FormWidget config={form__selectConcept} onSubmit={setFormState} />
        {id && <Concept id={id} />}
      </Feature>
    </FeatureRequirement>
  );
}
