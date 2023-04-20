import { appGql } from "../../../../../../../__generated__";

export const gqlNode_ASSET_FETCH_LIST =
  appGql(`query FetchAssetList($user: UserReferenceInput) {
  assetList(user: $user) {
    name
    realname
  }
}`);
