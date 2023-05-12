import React from "react";
import { useMutationForm } from "@services/graphql/hooks/useMutationForm";
import { useConceptEditForm } from "@features/concepts/behaviors/edit/hooks/useConceptEditForm";
import { FormWidget } from "@widgets/form/FormWidget";
import { form__editConcept } from "@features/concepts/behaviors/edit/config";
import { GraphqlMutationResponse } from "@services/graphql/components/api/GraphqlMutationResponse";
import { graphQlNodes } from "@identities/graphql/nodes";

export function ConceptEditForm() {
  const [onsubmit, response] = useMutationForm(
    graphQlNodes.concept.edit,
    (formState) => ({
      concept: {
        id: formState.id,
        src: formState.src,
        title: formState.title,
      },
      user: { username: formState.username },
    })
  );
  const [concept, setConceptFromForm] = useConceptEditForm();

  return (
    <React.Fragment>
      <FormWidget config={form__editConcept} onSubmit={setConceptFromForm} />
      {concept && (
        <FormWidget
          config={form__editConcept}
          onSubmit={onsubmit}
          defaultValue={concept}
        />
      )}
      <GraphqlMutationResponse response={response} />
    </React.Fragment>
  );
}
