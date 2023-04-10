import {gql, useQuery} from '@apollo/client';
import React, {useMemo} from 'react';
import {SelectInput, SelectOption} from '../../../../components/form/input/select/SelectInput';
import {IAsset} from '../../../../../.junction/models/asset/models';

function assetToOption(asset: IAsset): SelectOption<IAsset> {
    return {
        title:   asset.name,
        value:   asset.name,
        payload: asset,
    };
}

export function AssetSelector({formKey, username}: { formKey?: string, username: string }) {
  const ALL_FILES_QUERY =
        gql`
            query AllFiles($user: CreateUserInput) {
                userFiles(user: $user) {
                    name
                    realname
                }
            }
        `;

    const {data: query = {}} = useQuery(ALL_FILES_QUERY, {variables: {user: {username}}});
    const result             = useMemo(() => query.userFiles ? query.userFiles.map(assetToOption) : [], [query]);

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
