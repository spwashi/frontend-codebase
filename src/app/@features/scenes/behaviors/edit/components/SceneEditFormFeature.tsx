import React from "react";
import { Feature } from "@services/features/item/components/Feature";
import { featureId__sceneEditForm } from "../../../../../@/featureIds";
import { SceneEditForm } from "@features/scenes/behaviors/edit/components/SceneEditForm";

export function SceneEditFormFeature() {
  return (
    <Feature name={featureId__sceneEditForm}>
      <SceneEditForm />
    </Feature>
  );
}
