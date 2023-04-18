import {gql} from '@apollo/client';

export const gqlNode_ASSET_FETCH_ONE = gql`
    query Asset($realname: String!) {
        asset( realname: $realname) {
            name
            realname
            contentType
            uri
        }
    }
`;