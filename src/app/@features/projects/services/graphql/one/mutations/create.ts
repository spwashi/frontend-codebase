// Define mutation
import { gql } from "@apollo/client";

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
