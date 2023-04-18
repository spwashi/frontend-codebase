import {gql} from '@apollo/client';

export const gqlNode_PROJECT_FETCH_LIST = gql`
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