import React from "react";
import { gqlNode_SCENE_EDIT } from "@features/scenes/services/graphql/one/mutations/edit";
import { useMutationForm } from "@services/graphql/hooks/useMutationForm";
import { selectEditSceneInput } from "@features/scenes/behaviors/edit/selectors";
import { formClassNames } from "@widgets/form/styles/classNames";
import { FormWidget } from "@widgets/form/FormWidget";
import { form__editScene } from "@features/scenes/behaviors/edit/config";
import { GraphqlMutationResponse } from "@services/graphql/components/api/GraphqlMutationResponse";
import { useSceneSelectForm } from "@features/scenes/behaviors/select/hooks/useSceneSelectForm";

export function SceneEditForm() {
  const [onsubmit, response] = useMutationForm(
    gqlNode_SCENE_EDIT,
    selectEditSceneInput
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
