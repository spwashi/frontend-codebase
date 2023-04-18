import {gql} from '@apollo/client';

export const gqlQueryNode_ASSET_LIST = gql`
    query AllFiles($user: UserReferenceInput) {
        assetList(user: $user) {
            name
            realname
        }
    }
`;