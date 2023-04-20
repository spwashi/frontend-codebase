import { useQuery } from "@apollo/client";
import { useMemo } from "react";
import { IAsset } from "@junction/models/asset/models";
import { SelectOption } from "@widgets/form/features/fields/components/input/select/SelectInput";
import { graphQlNodes } from "../../../@/graphQlNodes";

function assetToOption(asset: IAsset): SelectOption<IAsset["id"]> {
  return {
    title: asset.name,
    value: asset.id,
    payload: asset.id,
  };
}

export function usePossibleAssetOptions(username: string) {
  const { data: query = {} } = useQuery(graphQlNodes.asset.fetchList, {
    variables: { user: { username } },
  });
  return useMemo(
    () => (query.assetList ? query.assetList.map(assetToOption) : []),
    [query]
  );
}
