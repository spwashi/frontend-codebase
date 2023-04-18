import {gql} from '@apollo/client';

export const gqlQueryNode_PROJECT_LIST = gql`
    query AllProjects($domain: String) {
        projectList(domain: $domain) {
            id
            title
            name
            description
            domain
        }
    }
`;