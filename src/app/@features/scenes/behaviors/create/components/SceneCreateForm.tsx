import React from "react";
import { gqlNode_SCENE_CREATE } from "@features/scenes/services/graphql/one/mutations/create";
import { useMutationForm } from "@services/graphql/hooks/useMutationForm";
import { selectCreateSceneInput } from "@features/scenes/behaviors/create/selectors";
import { FormWidget } from "@widgets/form/FormWidget";
import { form__createScene } from "@features/scenes/behaviors/create/config";
import { GraphqlMutationResponse } from "@services/graphql/components/api/GraphqlMutationResponse";

export function SceneCreateForm() {
  const [onsubmit, response] = useMutationForm(
    gqlNode_SCENE_CREATE,
    selectCreateSceneInput
  );
  return (
    <>
      <FormWidget config={form__createScene} onSubmit={onsubmit} />
      <GraphqlMutationResponse response={response} />
    </>
  );
}
