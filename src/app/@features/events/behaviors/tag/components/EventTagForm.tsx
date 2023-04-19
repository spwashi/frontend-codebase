import React from "react";
import { GraphqlMutationResponse } from "@services/graphql/components/api/GraphqlMutationResponse";
import { useMutationFormSubmitCallback } from "@services/graphql/hooks/useMutationFormSubmitCallback";
import { FormWidget } from "@widgets/form/FormWidget";
import { selectTagAdditionInput } from "@features/events/behaviors/tag/selectors";
import { form__tagEvent } from "../config";
import { useTagMutation } from "../../../services/graphql/one/mutations/tag";

export function EventTagForm() {
  const { send, response } = useTagMutation();
  const onsubmit = useMutationFormSubmitCallback(send, selectTagAdditionInput);
  return (
    <section id="form__event-tag">
      <FormWidget config={form__tagEvent} onSubmit={onsubmit} />
      <GraphqlMutationResponse response={response} />
    </section>
  );
}
