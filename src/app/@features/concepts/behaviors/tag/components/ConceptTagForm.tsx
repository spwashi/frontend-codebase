import React from "react";
import { GraphqlMutationResponse } from "@services/graphql/components/api/GraphqlMutationResponse";
import { useMutationForm } from "@services/graphql/hooks/useMutationForm";
import { FormWidget } from "@widgets/form/FormWidget";
import { selectTagAdditionInput } from "@features/concepts/behaviors/tag/selectors";
import { form__tagConcept } from "../config";
import { gqlNode_CONCEPT_TAG } from "@features/concepts/services/graphql/one/mutations/tag";

export function ConceptTagForm() {
  const [onsubmit, response] = useMutationForm(
    gqlNode_CONCEPT_TAG,
    selectTagAdditionInput
  );
  return (
    <section id="form__concept-tag">
      <FormWidget config={form__tagConcept} onSubmit={onsubmit} />
      <GraphqlMutationResponse response={response} />
    </section>
  );
}
