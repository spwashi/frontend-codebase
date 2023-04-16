// Define mutation
import {gql, useMutation} from '@apollo/client';

export const EDIT_SCENE_MUTATION = gql`
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
  const [send, response] = useMutation(EDIT_SCENE_MUTATION);
  return {send, response};
}