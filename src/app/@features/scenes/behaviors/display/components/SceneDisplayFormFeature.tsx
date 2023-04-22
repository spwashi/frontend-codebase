import React, { useState } from "react";
import { FormWidget } from "@widgets/form/FormWidget";

import { FeatureRequirement } from "@widgets/feature";
import { form__selectScene } from "@features/scenes/behaviors/select/config";
import { featureId__sceneDisplay } from "@/features/ids";
import { IFormContextState } from "@widgets/form/context/types/state";
import { Scene } from "../../../services/graphql/one/Scene";

export function SceneDisplayFormFeature() {
  const [formState, setFormState] = useState<IFormContextState>();
  const id = formState?.currentValue?.scene?.id;
  return (
    <FeatureRequirement name={featureId__sceneDisplay}>
      <FormWidget config={form__selectScene} onSubmit={setFormState} />
      {id && <Scene id={id} />}
    </FeatureRequirement>
  );
}
