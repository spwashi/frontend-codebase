// Define mutation
import { appGql } from "../../../../../../../__generated__";

export const gqlNode_PROJECT_CREATE =
  appGql(`mutation CreateProject($project: CreateProjectInput!) {
  createProject(project: $project) {
    id
    title
    domain
    description
  }
}`);
