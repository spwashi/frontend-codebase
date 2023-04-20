// Define mutation
import { appGql } from "../../../../../../../__generated__";

export const gqlNode_SCENE_EDIT =
  appGql(`mutation EditScene($scene: EditSceneInput!, $user: UserReferenceInput) {
  editScene(scene: $scene, user: $user) {
    id
    name
    title
    description
  }
}`);
