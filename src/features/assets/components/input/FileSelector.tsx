import {gql, useQuery} from '@apollo/client';
import React, {useMemo} from 'react';
import {SelectInput, SelectOption} from '../../../../components/form/input/select/SelectInput';
import {IAsset} from '../../../../app/models/asset/models';

function fileToOption(file: IAsset): SelectOption<IAsset> {
    return {
        title:   file.name,
        value:   file.name,
        payload: file,
    };
}

export function FileSelector({formKey, username}: { formKey?: string, username: string }) {
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
    const result             = useMemo(() => query.userFiles ? query.userFiles.map(fileToOption) : [], [query]);

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
