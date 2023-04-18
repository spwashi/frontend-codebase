import {useQuery} from '@apollo/client';
import React, {useMemo} from 'react';
import {SelectInput, SelectOption} from '@widgets/form/features/fields/components/input/select/SelectInput';
import {IAsset} from '@junction/models/asset/models';
import {gqlNode_ASSET_FINDALL} from '@features/assets/services/graphql/queries/list/list';

function assetToOption(asset: IAsset): SelectOption<IAsset> {
  return {
    title:   asset.name,
    value:   asset.name,
    payload: asset,
  };
}

export function AssetSelect({formKey, username}: { formKey?: string, username: string }) {
  const {data: query = {}} = useQuery(gqlNode_ASSET_FINDALL, {variables: {user: {username}}});
  const result             = useMemo(() => query.assetList ? query.assetList.map(assetToOption) : [], [query]);

  return (
    <>
      <SelectInput
        placeholder="File"
        formKey={formKey ?? ''}
        options={result}
      />
    </>
  );
}
