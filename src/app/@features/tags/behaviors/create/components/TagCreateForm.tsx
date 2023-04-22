import React from "react";
import { useMutationForm } from "@services/graphql/hooks/useMutationForm";
import { FormWidget } from "@widgets/form/FormWidget";
import { GraphqlMutationResponse } from "@services/graphql/components/api/GraphqlMutationResponse";
import { graphQlNodes } from "@/graphQlNodes";
import { form__createTag } from "../config";

export function TagCreateForm() {
  const [onsubmit, response] = useMutationForm(
    graphQlNodes.tag.create,
    (formState) => formState
  );
  return (
    <section id="form__tag-create">
      <FormWidget config={form__createTag} onSubmit={onsubmit} />
      <GraphqlMutationResponse response={response} />
    </section>
  );
}
