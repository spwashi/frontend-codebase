import {gql} from '@apollo/client';

export const gqlNode_PROJECT_FINDONE = gql`
    query Project($id: Int!) {
        project(id: $id) {
            id
            title
            domain
            description
        }
    }
`;