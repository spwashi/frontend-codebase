import { useCreateTagMutation } from "../../../services/graphql/one/mutations/create";
import { useDispatch } from "react-redux";
import { useMutationFormSubmitCallback } from "@services/graphql/hooks/useMutationFormSubmitCallback";
import { ACTION_TAG_CREATED } from "../../../services/redux/reducer";
import { selectCreateTagInput } from "../selectors";
import { FormWidget } from "@widgets/form/FormWidget";
import { form__createTag } from "../config";
import { GraphqlMutationResponse } from "@services/graphql/components/api/GraphqlMutationResponse";
import React from "react";

export function TagCreateForm() {
  const { send, response } = useCreateTagMutation();
  const dispatch = useDispatch();
  const onsubmit = useMutationFormSubmitCallback(
    (o) =>
      send(o).then((o) => {
        dispatch({ type: ACTION_TAG_CREATED });
        return o;
      }),
    selectCreateTagInput
  );
  return (
    <section id="form__tag-create">
      <FormWidget config={form__createTag} onSubmit={onsubmit} />
      <GraphqlMutationResponse response={response} />
    </section>
  );
}
