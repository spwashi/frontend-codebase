import {gql} from '@apollo/client';

export const gqlQueryNode_TAG = gql`
    query OneTag($id: Int!) {
        tag(id: $id) {
            id
            domain
            title
            description
        }
    }
`;