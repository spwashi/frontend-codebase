// Define mutation
import {gql, useMutation} from '@apollo/client';

const CREATE_SCENE = gql`
    mutation CreateScene($title: String!, $name: String!, $description: String) {
        createScene(scene: {title: $title, name: $name, description: $description}) {
            id
            name
            title
            description
        }
    }
`;
export function useCreateSceneMutation() {
    const [send, response] = useMutation(CREATE_SCENE);
    return {send, response};
}