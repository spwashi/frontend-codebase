import {gql, useQuery} from '@apollo/client';
import React, {useMemo} from 'react';
import {SelectInput} from '../../../components/form/input/select/SelectInput';
import {File} from '../../../../types/graphql/typeDefs';

function fileToOption(file: File) {
    return {
        title: file.name,
        value: file.realname,
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

    const options =
              useMemo(() => query.userFiles
                            ? query.userFiles.map(fileToOption)
                            : [],
                      [query]);

    return (
        <SelectInput
            placeholder={'File'}
            formKey={formKey ?? ''}
            options={options}
        />
    );
}
