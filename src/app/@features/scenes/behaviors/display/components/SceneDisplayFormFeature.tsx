import React, { useState } from "react";
import { Scene } from "../../../services/graphql/one";
import { FormWidget } from "@widgets/form/FormWidget";

import { FeatureRequirement } from "@services/features/list/components/FeatureRequirement";
import { form__selectScene } from "@features/scenes/behaviors/select/config";
import { featureId__sceneDisplay } from "../../../../../@/featureIds";

export function SceneDisplayFormFeature() {
  const [state, setState] = useState<any | null>();
  const id = state?.data?.scene?.id;
  return (
    <FeatureRequirement
      name={featureId__sceneDisplay}
      alternative={"Need Scene Display"}
    >
      <FormWidget config={form__selectScene} onSubmit={setState} />
      {id && <Scene id={id} />}
    </FeatureRequirement>
  );
}
