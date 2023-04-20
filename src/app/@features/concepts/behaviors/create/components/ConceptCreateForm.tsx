import React from "react";
import { gqlNode_CONCEPT_CREATE } from "@features/concepts/services/graphql/one/mutations/create";
import { useMutationForm } from "@services/graphql/hooks/useMutationForm";
import { selectCreateConceptInput } from "@features/concepts/behaviors/create/selectors";
import { ErrorBoundary } from "@core/error/components/ErrorBoundary";
import { FormWidget } from "@widgets/form/FormWidget";
import { form__createConcept } from "@features/concepts/behaviors/create/config";
import { GraphqlMutationResponse } from "@services/graphql/components/api/GraphqlMutationResponse";

export function ConceptCreateForm() {
  const [onsubmit, response] = useMutationForm(
    gqlNode_CONCEPT_CREATE,
    selectCreateConceptInput
  );
  return (
    <ErrorBoundary>
      <FormWidget config={form__createConcept} onSubmit={onsubmit} />
      <GraphqlMutationResponse response={response} />
    </ErrorBoundary>
  );
}
