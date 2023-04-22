import { appGql } from '@generated/gql';

export const gqlNode_SCENE_FETCH_ONE =
  appGql(`query FetchScene($scene: SceneReferenceInput!) {
  scene(scene: $scene) {
    id
    name
    title
    description
  }
}`);
