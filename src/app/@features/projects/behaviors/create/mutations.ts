// Define mutation
import {gql, useMutation} from '@apollo/client';

export const CREATE_PROJECT_MUTATION = gql`
    mutation CreateProject($project:CreateProjectInput!) {
        createProject(project: $project) {
            id
            title
            domain
            description
        }
    }
`;
export function useCreateProjectMutation() {
  const [send, response] = useMutation(CREATE_PROJECT_MUTATION);

  return {send, response};
}