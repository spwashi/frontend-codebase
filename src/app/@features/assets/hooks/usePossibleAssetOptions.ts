import { useQuery } from "@apollo/client";
import { useMemo } from "react";
import { IAsset } from "@junction/models/asset/models";
import { graphQlNodes } from "../../../@/graphQlNodes";

export function usePossibleAssetOptions(username: string) {
  const { data: query } = useQuery(graphQlNodes.asset.fetchList, {
    variables: { user: { username } },
  });
  return useMemo(
    () =>
      query?.assetList
        ? (query.assetList.filter((i) => !!i) as IAsset[]).map((asset) => ({
            title: asset.name,
            value: asset.id,
            payload: asset.realname,
          }))
        : [],
    [query]
  );
}
