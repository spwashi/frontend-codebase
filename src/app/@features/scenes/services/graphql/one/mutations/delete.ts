import { appGql } from "../../../../../../../__generated__";

export const gqlNode_SCENE_DELETE =
  appGql(`mutation DeleteScene($scene: DeleteSceneInput!) {
  deleteScene(scene: $scene) {
    id
  }
}`);
