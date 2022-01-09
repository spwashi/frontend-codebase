import {gql, useQuery} from '@apollo/client';
import React, {useMemo} from 'react';
import {SelectInput} from '../../../../components/form/input/select/SelectInput';
import {Log} from '../../../../components/Log';
import {IAsset} from '../../../../models/asset/models';

function fileToOption(file: IAsset) {
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
    const files              = <><Log>{query}</Log></>

    const options = useMemo(() => query.userFiles ? query.userFiles : [], [query]);
    const map     = useMemo(() => new Map(options.map((file: any) => [file.name, file])), [options]);
    ;

    return (
        <>
            <SelectInput
                valueMapper={val => {
                    return map.get(val)
                }}
                placeholder={'File'}
                formKey={formKey ?? ''}
                options={options.map(fileToOption)}
            />
        </>
    );
}
