// Define mutation
import { gql, useMutation } from "@apollo/client";

export const gqlNode_PROJECT_CREATE = gql`
  mutation CreateProject($project: CreateProjectInput!) {
    createProject(project: $project) {
      id
      title
      domain
      description
    }
  }
`;
export function useCreateProjectMutation() {
  const [send, response] = useMutation(gqlNode_PROJECT_CREATE);

  return { send, response };
}
