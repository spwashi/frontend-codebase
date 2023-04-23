import { appGql } from '@generated/gql';

export const gqlNode_SCENE_DELETE =
  appGql(`mutation DeleteScene($scene: DeleteSceneInput!) {
  deleteScene(scene: $scene) {
    id
  }
}`);
