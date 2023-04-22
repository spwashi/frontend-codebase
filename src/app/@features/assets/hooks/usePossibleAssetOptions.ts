import { useQuery } from "@apollo/client";
import { useMemo } from "react";
import { graphQlNodes } from "@/graphql/nodes";
import { Asset } from "@generated/graphql";

export function usePossibleAssetOptions(username: string) {
  const { data: query } = useQuery(graphQlNodes.asset.fetchList, {
    variables: { user: { username } },
  });
  return useMemo(
    () =>
      query?.assetList
        ? (query.assetList.filter((i) => !!i) as Asset[]).map((asset) => ({
            title: asset.name,
            value: asset.id,
            payload: asset.realname,
          }))
        : [],
    [query]
  );
}
