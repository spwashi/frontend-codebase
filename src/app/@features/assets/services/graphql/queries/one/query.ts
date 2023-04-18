import {gql} from '@apollo/client';

export const gqlQueryNode_ASSET = gql`
    query Asset($realname: String!) {
        asset( realname: $realname) {
            name
            realname
            contentType
            uri
        }
    }
`;