import { appGql } from "../../../../../../../__generated__";

export const gqlNode_ASSET_FETCH_ONE =
  appGql(`query FetchAsset($asset: AssetReferenceInput!) {
  asset(asset: $asset) {
    name
    realname
    contentType
    uri
  }
}`);
