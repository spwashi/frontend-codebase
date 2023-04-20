import { appGql } from "../../../../../../../__generated__";

export const gqlNode_ASSET_FETCH_ONE =
  appGql(`query FetchAsset($realname: String!) {
  asset(realname: $realname) {
    name
    realname
    contentType
    uri
  }
}`);
