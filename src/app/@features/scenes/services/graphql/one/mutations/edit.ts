// Define mutation
import {gql, useMutation} from '@apollo/client';

export const gqlNode_SCENE_EDIT = gql`
    mutation EditScene($scene: EditSceneInput, $user: UserReferenceInput) {
        editScene(scene: $scene, user: $user) {
            id
            name
            title
            description
        }
    }
`;
export function useEditSceneMutation() {
  const [send, response] = useMutation(gqlNode_SCENE_EDIT);
  return {send, response};
}