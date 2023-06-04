import React from "react";
import { UserFeatures } from "@features/users/components/Features";
import { SceneFeatures } from "@features/scenes/components/SceneFeatures";
import { TagFeatures } from "@features/tags/components/TagFeatures";
import { appClassnames } from "@core/styles/classNames";

export function ScenesRequisiteFeatures() {
  return (
    <div className={appClassnames.requirements.feature}>
      <UserFeatures />
      <SceneFeatures />
      <TagFeatures />
    </div>
  );
}
