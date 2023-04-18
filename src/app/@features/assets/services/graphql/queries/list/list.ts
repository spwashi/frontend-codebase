import {gql} from '@apollo/client';

export const gqlNode_ASSET_FINDALL = gql`
    query AllFiles($user: UserReferenceInput) {
        assetList(user: $user) {
            name
            realname
        }
    }
`;