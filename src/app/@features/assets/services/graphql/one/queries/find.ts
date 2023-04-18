import {gql} from '@apollo/client';

export const gqlNode_ASSET_FINDONE = gql`
    query Asset($realname: String!) {
        asset( realname: $realname) {
            name
            realname
            contentType
            uri
        }
    }
`;