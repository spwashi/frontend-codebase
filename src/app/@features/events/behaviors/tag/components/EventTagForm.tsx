import React from "react";
import { GraphqlMutationResponse } from "@services/graphql/components/api/GraphqlMutationResponse";
import { useMutationForm } from "@services/graphql/hooks/useMutationForm";
import { FormWidget } from "@widgets/form/FormWidget";
import { selectTagAdditionInput } from "@features/events/behaviors/tag/selectors";
import { form__tagEvent } from "../config";
import { gqlNode_EVENT_TAG } from "../../../services/graphql/one/mutations/tag";

export function EventTagForm() {
  const [onsubmit, response] = useMutationForm(
    gqlNode_EVENT_TAG,
    selectTagAdditionInput
  );
  return (
    <section id="form__event-tag">
      <FormWidget config={form__tagEvent} onSubmit={onsubmit} />
      <GraphqlMutationResponse response={response} />
    </section>
  );
}
