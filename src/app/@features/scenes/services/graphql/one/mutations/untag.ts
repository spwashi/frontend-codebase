import { appGql } from '@generated/gql';

export const gqlNode_SCENE_UNTAG =
  appGql(`mutation UntagScene($scene: SceneReferenceInput!, $tags: [TagReferenceInput], $user: UserReferenceInput) {
  untagScene(scene: $scene, tags: $tags, user: $user) {
    scene {
      id
    }
    tag {
      id
    }
  }
}`);
