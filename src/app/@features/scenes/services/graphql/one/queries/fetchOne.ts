import { appGql } from "../../../../../../../__generated__";

export const gqlNode_SCENE_FETCH_ONE =
  appGql(`query FetchScene($scene: SceneReferenceInput!) {
  scene(scene: $scene) {
    id
    name
    title
    description
  }
}`);
