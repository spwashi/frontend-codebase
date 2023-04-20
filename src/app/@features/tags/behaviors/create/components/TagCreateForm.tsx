import React from "react";
import { useMutationForm } from "@services/graphql/hooks/useMutationForm";
import { FormWidget } from "@widgets/form/FormWidget";
import { GraphqlMutationResponse } from "@services/graphql/components/api/GraphqlMutationResponse";
import { selectCreateTagInput } from "../selectors";
import { form__createTag } from "../config";
import { graphQlNodes } from "../../../../../@/graphQlNodes";

export function TagCreateForm() {
  const [onsubmit, response] = useMutationForm(
    graphQlNodes.tag.create,
    selectCreateTagInput
  );
  return (
    <section id="form__tag-create">
      <FormWidget config={form__createTag} onSubmit={onsubmit} />
      <GraphqlMutationResponse response={response} />
    </section>
  );
}
