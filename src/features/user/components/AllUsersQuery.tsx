import {UserInput} from '../../../../../server/src/graphql/typeDefs';
import {gql, useQuery} from '@apollo/client';
import React, {useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectPossibleUsersLastFetched} from '../redux/selectors';
import {ACTION_RECEIVE_ALL_USERS} from '../redux/reducer';

function userToOption(user: UserInput) {
    return {title: user.name, value: user.username};
}

function fetchIsCurrent(lastFetched: number | null) {
    return (Date.now() - (lastFetched ?? 0)) < 1000;
}
export function AllUsersQuery() {
  const ALL_USERS_QUERY               =
        gql`
            query AllUsers {
                allUsers {
                    name
                    username
                }
            }
        `;
    const {data: query = {}, loading} = useQuery(ALL_USERS_QUERY);
    const options                     = useMemo(() => query.allUsers ? query.allUsers.map(userToOption) : [], [loading]);
    const dispatch                    = useDispatch();
    const lastFetched                 = useSelector(selectPossibleUsersLastFetched)

    useEffect(() => {
        if (fetchIsCurrent(lastFetched)) {
            return;
        }
        dispatch({type: ACTION_RECEIVE_ALL_USERS, payload: options})
    }, [options.length, lastFetched]);

    return !fetchIsCurrent(lastFetched) ? <>Loading...</> : null;
}