import React from "react";
import { gqlNode_EVENT_CREATE } from "@features/events/services/graphql/one/mutations/create";
import { useMutationForm } from "@services/graphql/hooks/useMutationForm";
import { selectCreateEventInput } from "@features/events/behaviors/create/selectors";
import { FormWidget } from "@widgets/form/FormWidget";
import { form__createEvent } from "@features/events/behaviors/create/config";
import { GraphqlMutationResponse } from "@services/graphql/components/api/GraphqlMutationResponse";

export function EventCreateForm() {
  const [onsubmit, response] = useMutationForm(
    gqlNode_EVENT_CREATE,
    selectCreateEventInput
  );
  return (
    <>
      <FormWidget config={form__createEvent} onSubmit={onsubmit} />
      <GraphqlMutationResponse response={response} />
    </>
  );
}
