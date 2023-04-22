import React from "react";
import { Feature } from "@widgets/feature";
import { SceneCreateForm } from "@features/scenes/behaviors/create/components/SceneCreateForm";

import { featureId__sceneCreateForm } from "@/features/scenes/ids";

export function SceneCreateFormFeature() {
  return (
    <Feature name={featureId__sceneCreateForm}>
      <SceneCreateForm />
    </Feature>
  );
}
