// Define mutation

import { appGql } from "../../../../../../../__generated__";

export const gqlNode_SCENE_CREATE =
  appGql(`mutation CreateScene($scene: CreateSceneInput!) {
  createScene(scene: $scene) {
    id
    name
    title
    description
  }
}`);
