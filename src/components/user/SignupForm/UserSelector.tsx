import {gql, useQuery} from '@apollo/client';
import {SelectInput} from '../../../features/form/FormContext';
import React, {useMemo} from 'react';
import {UserInput} from '../../../../../server/src/graphql/typeDefs';

function userToOption(user: UserInput) {
    return {title: user.name, value: user.username};
}
export function UserSelector({formKey}: { formKey: string }) {
  const ALL_USERS_QUERY =
        gql`
            query AllUsers {
                allUsers {
                    name
                    username
                }
            }
        `;

    const {data: query} = useQuery(ALL_USERS_QUERY)
    const options       = useMemo(
        () =>
            !query
            ? []
            : (query?.allUsers ?? []).map(userToOption),
        [query],
    );

    return (
        <SelectInput
            formKey={formKey}
            options={options}
        />
    );
}