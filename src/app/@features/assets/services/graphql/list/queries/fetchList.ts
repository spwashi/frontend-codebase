import {gql} from '@apollo/client';

export const gqlNode_ASSET_FETCH_LIST = gql`
    query AllFiles($user: UserReferenceInput) {
        assetList(user: $user) {
            name
            realname
        }
    }
`;