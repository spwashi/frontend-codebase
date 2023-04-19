import React from "react";
import { useCreateSceneMutation } from "@features/scenes/services/graphql/one/mutations/create";
import { useMutationFormSubmitCallback } from "@services/graphql/hooks/useMutationFormSubmitCallback";
import { selectCreateSceneInput } from "@features/scenes/behaviors/create/selectors";
import { FormWidget } from "@widgets/form/FormWidget";
import { form__createScene } from "@features/scenes/behaviors/create/config";
import { GraphqlMutationResponse } from "@services/graphql/components/api/GraphqlMutationResponse";

export function SceneCreateForm() {
  const { send, response } = useCreateSceneMutation();
  const onsubmit = useMutationFormSubmitCallback(send, selectCreateSceneInput);
  return (
    <>
      <FormWidget config={form__createScene} onSubmit={onsubmit} />
      <GraphqlMutationResponse response={response} />
    </>
  );
}
