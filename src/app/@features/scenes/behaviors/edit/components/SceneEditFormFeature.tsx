import React from "react";
import { Feature } from "@widgets/feature";
import { SceneEditForm } from "@features/scenes/behaviors/edit/components/SceneEditForm";
import { featureIds } from "@identities/features/ids";

export function SceneEditFormFeature() {
  return (
    <Feature name={featureIds.scene.edit_form}>
      <SceneEditForm />
    </Feature>
  );
}
