import React from "react";
import { useMutationForm } from "@services/graphql/hooks/useMutationForm";
import { FormWidget } from "@widgets/form/FormWidget";
import { form__createConcept } from "@features/concepts/behaviors/create/config";
import { GraphqlMutationResponse } from "@services/graphql/components/api/GraphqlMutationResponse";
import { graphQlNodes } from "@/graphql/nodes";

export function ConceptCreateForm() {
  const [onsubmit, response] = useMutationForm(
    graphQlNodes.concept.create,
    (formState) => ({
      concept: { src: formState.src },
      user: { username: formState.username },
    })
  );
  return (
    <React.Fragment>
      <FormWidget config={form__createConcept} onSubmit={onsubmit} />
      <GraphqlMutationResponse response={response} />
    </React.Fragment>
  );
}
