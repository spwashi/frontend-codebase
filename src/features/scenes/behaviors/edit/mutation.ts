// Define mutation
import {gql, useMutation} from '@apollo/client';

const EDIT_SCENE = gql`
    mutation EditScene($id: Int!, $title:String, $description:String) {
        editScene(scene: {id: $id, title: $title, description: $description}) {
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