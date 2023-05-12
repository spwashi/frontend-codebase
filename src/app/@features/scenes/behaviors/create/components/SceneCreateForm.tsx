import React from "react";
import { useMutationForm } from "@services/graphql/hooks/useMutationForm";
import { FormWidget } from "@widgets/form/FormWidget";
import { form__createScene } from "@features/scenes/behaviors/create/config";
import { GraphqlMutationResponse } from "@services/graphql/components/api/GraphqlMutationResponse";
import { graphQlNodes } from "@identities/graphql/nodes";

export function SceneCreateForm() {
  const [onsubmit, response] = useMutationForm(
    graphQlNodes.scene.create,
    (formState) => {
      return {
        scene: formState,
      };
    }
  );
  return (
    <>
      <FormWidget config={form__createScene} onSubmit={onsubmit} />
      <GraphqlMutationResponse response={response} />
    </>
  );
}
