import React, { FunctionComponent } from "react";
import { UserFeatures } from "./users/components/Features";
import { SceneFeatures } from "./scenes/components/Features";
import { TagFeatures } from "./tags/components/Features";
import { ConceptFeatures } from "./concepts/components/Features";
import { EventFeatures } from "./events/components/Features";
import { ProjectFeatures } from "./projects/components/Features";
import { AssetFeatures } from "@features/assets/components/Features";

export const featureComponentMap: {
  [key: string]: FunctionComponent<React.PropsWithChildren> & {
    featureDeps: FunctionComponent[];
  };
} = {
  users: UserFeatures,
  scenes: SceneFeatures,
  assets: AssetFeatures,
  tags: TagFeatures,
  concepts: ConceptFeatures,
  events: EventFeatures,
  projects: ProjectFeatures,
};

export type IFeatureName = keyof typeof featureComponentMap;
