import {gql} from '@apollo/client';

export const gqlNode_PROJECT_FINDALL = gql`
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