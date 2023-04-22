import React from "react";
import { Feature } from "@services/features/item/components/Feature";
import { SceneCreateForm } from "@features/scenes/behaviors/create/components/SceneCreateForm";
import { featureId__sceneCreateForm } from '@/featureIds';

export function SceneCreateFormFeature() {
  return (
    <Feature name={featureId__sceneCreateForm}>
      <SceneCreateForm />
    </Feature>
  );
}
