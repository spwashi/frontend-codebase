import React from "react";
import { Feature } from "@widgets/feature";
import { SceneCreateForm } from "@features/scenes/behaviors/create/components/SceneCreateForm";
import { featureIds } from "@/features/ids";

export function SceneCreateFormFeature() {
  return (
    <Feature name={featureIds.scene.create_form}>
      <SceneCreateForm />
    </Feature>
  );
}
