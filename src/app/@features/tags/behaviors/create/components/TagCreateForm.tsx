import React from "react";
import { useMutationForm } from "@services/graphql/hooks/useMutationForm";
import { FormWidget } from "@widgets/form/FormWidget";
import { GraphqlMutationResponse } from "@services/graphql/components/api/GraphqlMutationResponse";
import { gqlNode_TAG_CREATE } from "../../../services/graphql/one/mutations/create";
import { selectCreateTagInput } from "../selectors";
import { form__createTag } from "../config";

export function TagCreateForm() {
  const [onsubmit, response] = useMutationForm(
    gqlNode_TAG_CREATE,
    selectCreateTagInput
  );
  return (
    <section id="form__tag-create">
      <FormWidget config={form__createTag} onSubmit={onsubmit} />
      <GraphqlMutationResponse response={response} />
    </section>
  );
}
