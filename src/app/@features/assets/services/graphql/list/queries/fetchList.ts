import { appGql } from '@generated/gql';

export const gqlNode_ASSET_FETCH_LIST =
  appGql(`query FetchAssetList($user: UserReferenceInput) {
  assetList(user: $user) {
    id
    name
    realname
  }
}`);
