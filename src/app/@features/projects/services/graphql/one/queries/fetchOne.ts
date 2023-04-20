import { appGql } from "../../../../../../../__generated__";

export const gqlNode_PROJECT_FETCH_ONE =
  appGql(`query FetchProject($project: ProjectReferenceInput!) {
  project(project: $project) {
    id
    title
    domain
    description
  }
}`);
