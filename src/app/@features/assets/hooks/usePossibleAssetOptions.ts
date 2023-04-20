import { useQuery } from "@apollo/client";
import { gqlNode_ASSET_FETCH_LIST } from "@features/assets/services/graphql/list/queries/fetchList";
import { useMemo } from "react";
import { IAsset } from "@junction/models/asset/models";
import { SelectOption } from "@widgets/form/features/fields/components/input/select/SelectInput";

function assetToOption(asset: IAsset): SelectOption<IAsset["id"]> {
  return {
    title: asset.name,
    value: asset.id,
    payload: asset.id,
  };
}

export function usePossibleAssetOptions(username: string) {
  const { data: query = {} } = useQuery(gqlNode_ASSET_FETCH_LIST, {
    variables: { user: { username } },
  });
  return useMemo(
    () => (query.assetList ? query.assetList.map(assetToOption) : []),
    [query]
  );
}
