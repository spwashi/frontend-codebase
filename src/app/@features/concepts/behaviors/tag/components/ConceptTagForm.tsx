import React from "react";
import { GraphqlMutationResponse } from "@services/graphql/components/api/GraphqlMutationResponse";
import { useMutationFormSubmitCallback } from "@services/graphql/hooks/useMutationFormSubmitCallback";
import { FormWidget } from "@widgets/form/FormWidget";
import { selectTagAdditionInput } from "@features/concepts/behaviors/tag/selectors";
import { form__tagConcept } from "../config";
import { useTagMutation } from "../../../services/graphql/one/mutations/tag";

export function ConceptTagForm() {
  const { send, response } = useTagMutation();
  const onsubmit = useMutationFormSubmitCallback(send, selectTagAdditionInput);
  return (
    <section id="form__concept-tag">
      <FormWidget config={form__tagConcept} onSubmit={onsubmit} />
      <GraphqlMutationResponse response={response} />
    </section>
  );
}
