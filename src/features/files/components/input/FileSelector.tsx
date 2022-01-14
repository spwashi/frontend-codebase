import {gql, useQuery} from '@apollo/client';
import React, {useMemo} from 'react';
import {SelectInput, SelectOption} from '../../../../components/form/input/select/SelectInput';
import {IAsset} from '../../../../models/asset/models';

function fileToOption(file: IAsset): SelectOption {
    return {
        title: file.name,
        value: file.name,
    };
}

export function FileSelector({formKey, username}: { formKey?: string, username: string }) {
  const ALL_FILES_QUERY =
        gql`
            query AllFiles($user: UserInput) {
                userFiles(user: $user) {
                    name
                    realname
                }
            }
        `;

    const {data: query = {}} = useQuery(ALL_FILES_QUERY, {variables: {user: {username}}});
    const result             = useMemo(() => query.userFiles ? query.userFiles : [], [query]);
    const map                = useMemo(() => new Map(result.map((file: any) => [file.name, file])), [result]);

    return (
        <>
            <SelectInput
                valueMapper={val => map.get(val)}
                placeholder="File"
                formKey={formKey ?? ''}
                options={result.map(fileToOption)}
            />
        </>
    );
}
