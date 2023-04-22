import React from "react";
import { Feature } from "@widgets/feature";
import { SceneEditForm } from "@features/scenes/behaviors/edit/components/SceneEditForm";

import { featureId__sceneEditForm } from "@/features/scenes/ids";

export function SceneEditFormFeature() {
  return (
    <Feature name={featureId__sceneEditForm}>
      <SceneEditForm />
    </Feature>
  );
}
