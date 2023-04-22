import React from "react";
import { GraphqlMutationResponse } from "@services/graphql/components/api/GraphqlMutationResponse";
import { useMutationForm } from "@services/graphql/hooks/useMutationForm";
import { FormWidget } from "@widgets/form/FormWidget";
import { form__tagEvent } from "../config";
import { graphQlNodes } from '@/graphQlNodes';

export function EventTagForm() {
  const [onsubmit, response] = useMutationForm(
    graphQlNodes.event.tag,
    (formState) => {
      const {} = formState;
      return {
        user: {},
        event: {},
        tags: [],
      };
    }
  );
  return (
    <section id="form__event-tag">
      <FormWidget config={form__tagEvent} onSubmit={onsubmit} />
      <GraphqlMutationResponse response={response} />
    </section>
  );
}
