// Define mutation
import {gql, useMutation} from '@apollo/client';

export const gqlMutationNode_CREATE_PROJECT = gql`
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
  const [send, response] = useMutation(gqlMutationNode_CREATE_PROJECT);

  return {send, response};
}