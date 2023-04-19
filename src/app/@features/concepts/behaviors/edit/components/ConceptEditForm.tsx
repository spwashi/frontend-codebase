import { useEditConceptMutation } from "@features/concepts/services/graphql/one/mutations/edit";
import { useMutationFormSubmitCallback } from "@services/graphql/hooks/useMutationFormSubmitCallback";
import { selectEditConceptInput } from "@features/concepts/behaviors/edit/selectors";
import { useConceptEditForm } from "@features/concepts/behaviors/edit/hooks/useConceptEditForm";
import React from "react";
import { FormWidget } from "@widgets/form/FormWidget";
import { form__editConcept } from "@features/concepts/behaviors/edit/config";
import { GraphqlMutationResponse } from "@services/graphql/components/api/GraphqlMutationResponse";

export function ConceptEditForm() {
  const { send, response } = useEditConceptMutation();
  const onsubmit = useMutationFormSubmitCallback(send, selectEditConceptInput);
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
