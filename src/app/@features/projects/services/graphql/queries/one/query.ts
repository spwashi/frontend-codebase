import {gql} from '@apollo/client';

export const gqlQueryNode_PROJECT = gql`
    query Project($id: Int!) {
        project(id: $id) {
            id
            title
            domain
            description
        }
    }
`;