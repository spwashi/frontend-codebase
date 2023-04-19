import React from "react";
import { Feature } from "@services/features/item/components/Feature";
import { featureId__sceneCreateForm } from "../../../../../@/featureIds";
import { SceneCreateForm } from "@features/scenes/behaviors/create/components/SceneCreateForm";

export function SceneCreateFormFeature() {
  return (
    <Feature name={featureId__sceneCreateForm}>
      <SceneCreateForm />
    </Feature>
  );
}
