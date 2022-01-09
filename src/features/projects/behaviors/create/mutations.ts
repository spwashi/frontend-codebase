// Define mutation
import {gql, useMutation} from '@apollo/client';

const CREATE_PROJECT = gql`
    mutation CreateProject($project:ProjectInput!) {
        createProject(project: $project) {
            title
        }
    }
`;
export function useCreateProjectMutation() {
    const [send, response] = useMutation(CREATE_PROJECT);
    return {send, response};
}