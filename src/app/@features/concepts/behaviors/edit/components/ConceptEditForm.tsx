import React from "react";
import { gqlNode_CONCEPT_EDIT } from "@features/concepts/services/graphql/one/mutations/edit";
import { useMutationForm } from "@services/graphql/hooks/useMutationForm";
import { selectEditConceptInput } from "@features/concepts/behaviors/edit/selectors";
import { useConceptEditForm } from "@features/concepts/behaviors/edit/hooks/useConceptEditForm";
import { FormWidget } from "@widgets/form/FormWidget";
import { form__editConcept } from "@features/concepts/behaviors/edit/config";
import { GraphqlMutationResponse } from "@services/graphql/components/api/GraphqlMutationResponse";

export function ConceptEditForm() {
  const [onsubmit, response] = useMutationForm(
    gqlNode_CONCEPT_EDIT,
    selectEditConceptInput
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
