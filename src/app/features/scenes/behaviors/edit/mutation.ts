// Define mutation
import {gql, useMutation} from '@apollo/client';

const EDIT_SCENE = gql`
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
    const [send, response] = useMutation(EDIT_SCENE);
    return {send, response};
}