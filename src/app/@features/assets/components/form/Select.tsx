import {gql, useQuery} from '@apollo/client';
import React, {useMemo} from 'react';
import {SelectInput, SelectOption} from '@widgets/form/features/fields/components/input/select/SelectInput';
import {IAsset} from '@junction/models/asset/models';

function assetToOption(asset: IAsset): SelectOption<IAsset> {
  return {
    title:   asset.name,
    value:   asset.name,
    payload: asset,
  };
}

export const ASSET_LIST_QUERY = gql`
    query AllFiles($user: UserReferenceInput) {
        assetList(user: $user) {
            name
            realname
        }
    }
`;

export function AssetSelect({formKey, username}: { formKey?: string, username: string }) {
  const {data: query = {}} = useQuery(ASSET_LIST_QUERY, {variables: {user: {username}}});
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
