import { appGql } from "../../../../../../../__generated__";

export const gqlNode_PROJECT_FETCH_LIST =
  appGql(`query FetchProjectList($domain: String) {
  projectList(domain: $domain) {
    id
    title
    name
    description
    domain
  }
}`);
