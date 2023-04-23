import React from "react";
import { UserFeatures } from "@features/users/components/Features";
import { SceneFeatures } from "@features/scenes/components/SceneFeatures";
import { TagFeatures } from "@features/tags/components/TagFeatures";

export function ScenesRequisiteFeatures() {
  return (
    <>
      <UserFeatures /> <SceneFeatures /> <TagFeatures />
    </>
  );
}
