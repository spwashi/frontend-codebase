import {gql, useMutation} from '@apollo/client';

export const gqlNode_SCENE_UNTAG = gql`
    mutation UntagScene($scene: SceneReferenceInput!, $tags: [TagReferenceInput], $user: UserReferenceInput) {
        untagScene(scene: $scene, tags: $tags, user: $user) {
            scene {
                id
            }
            tag {
                id
            }
        }
    }
`;
export function useDeleteSceneTagMutation() {
    const [deleteTag] = useMutation(gqlNode_SCENE_UNTAG)
    return deleteTag;
}