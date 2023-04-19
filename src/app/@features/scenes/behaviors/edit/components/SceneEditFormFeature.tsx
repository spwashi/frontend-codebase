import React from "react";
import { Feature } from "@services/features/item/components/Feature";
import { SceneEditForm } from "@features/scenes/behaviors/edit/components/SceneEditForm";
import { featureId__sceneEditForm } from "../../../../../@/featureIds";

export function SceneEditFormFeature() {
  return (
    <Feature name={featureId__sceneEditForm}>
      <SceneEditForm />
    </Feature>
  );
}
