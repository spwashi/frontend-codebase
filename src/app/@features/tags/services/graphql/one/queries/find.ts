import {gql} from '@apollo/client';

export const gqlNode_TAG_FINDONE = gql`
    query OneTag($id: Int!) {
        tag(id: $id) {
            id
            domain
            title
            description
        }
    }
`;