import React from "react";
import { useMutationForm } from "@services/graphql/hooks/useMutationForm";
import { formClassNames } from "@widgets/form/styles/classNames";
import { FormWidget } from "@widgets/form/FormWidget";
import { form__editScene } from "@features/scenes/behaviors/edit/config";
import { GraphqlMutationResponse } from "@services/graphql/components/api/GraphqlMutationResponse";
import { useSceneSelectForm } from "@features/scenes/behaviors/select/hooks/useSceneSelectForm";
import { graphQlNodes } from "@/graphQlNodes";

export function SceneEditForm() {
  const [onsubmit, response] = useMutationForm(
    graphQlNodes.scene.edit,
    (formState) => {
      return {
        scene: formState.scene,
      };
    }
  );
  const [scene, setScene] = useSceneSelectForm();
  return (
    <>
      <section className={formClassNames.formWrapper}>
        <header>
          Select Scene To Edit{" "}
          <small className="dev-only">scene-edit-select</small>
        </header>
      </section>
      {scene && (
        <FormWidget
          config={form__editScene}
          onSubmit={onsubmit}
          onChange={setScene}
          defaultValue={scene}
        />
      )}
      <GraphqlMutationResponse response={response} />
    </>
  );
}
