import { UserFeatures } from "@features/users/components/Features";
import { SceneFeatures } from "@features/scenes/components/Features";
import { TagFeatures } from "@features/tags/components/Features";
import React from "react";

export function ScenesRequisiteFeatures() {
  return (
    <>
      <UserFeatures /> <SceneFeatures /> <TagFeatures />
    </>
  );
}
