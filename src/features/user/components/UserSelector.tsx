import {gql, useQuery} from '@apollo/client';
import React, {useContext, useEffect, useMemo} from 'react';
import {UserInput} from '../../../../../server/src/graphql/typeDefs';
import {SelectInput} from '../../../components/form/input/select/SelectInput';
import {useDispatch, useSelector} from 'react-redux';
import {ACTION_RECEIVE_ALL_USERS, selectLoggedInUserName, selectPossibleUsersList} from '../features/login/redux/reducer';
import {FormContext} from '../../../components/form/FormContext';
import {updateFormItem} from '../../../components/form/hooks/useFormItemController';

function userToOption(user: UserInput) {
    return {title: user.name, value: user.username};
}
function AllUsersQuery() {
  const ALL_USERS_QUERY      =
        gql`
            query AllUsers {
                allUsers {
                    name
                    username
                }
            }
        `;
    const {data: query = {}} = useQuery(ALL_USERS_QUERY);
    const options            = useMemo(() => query.allUsers ? query.allUsers.map(userToOption) : [], [query]);
    const dispatch           = useDispatch();
    useEffect(() => {
        if (!options.length) return;
        dispatch({type: ACTION_RECEIVE_ALL_USERS, payload: options})
    }, [options]);

    return <>Loading...</>;
}

export function UserSelector({formKey, ignoreLogin}: { formKey: string; ignoreLogin?: boolean }) {
    const userOptions  = useSelector(selectPossibleUsersList);
    const loggedInUser = useSelector(selectLoggedInUserName);
    const context      = useContext(FormContext);
    useEffect(() => {
        updateFormItem(context, formKey, loggedInUser)
    }, [loggedInUser]);

    if (loggedInUser && !ignoreLogin) return null;
    return (
        <>
            {
                !userOptions.length
                ? <AllUsersQuery/>
                : <SelectInput placeholder={'User'} formKey={formKey} options={userOptions}/>
            }
        </>
    );
}