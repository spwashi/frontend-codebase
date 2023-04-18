import {gql, useMutation} from '@apollo/client';

export const gqlMutationNode_UNTAG_SCENE = gql`
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
    const [deleteTag] = useMutation(gqlMutationNode_UNTAG_SCENE)
    return deleteTag;
}