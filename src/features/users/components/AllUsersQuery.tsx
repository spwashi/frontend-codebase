import {gql, useQuery} from '@apollo/client';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectPossibleUsersLastFetched} from '../redux/selectors';
import {ACTION_RECEIVE_ALL_USERS} from '../redux/reducer';
import {UserInput} from '../../../../../server/src/graphql/typeDefs';

function userToOption(user: UserInput) {
    return {title: user.name, value: user.username};
}

function fetchIsCurrent(lastFetched: number | null) {
    return (Date.now() - (lastFetched ?? 0)) < 1000;
}
export function AllUsersQuery() {
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
    const dispatch           = useDispatch();
    const lastFetched        = useSelector(selectPossibleUsersLastFetched)

    useEffect(() => {
        const options = query.allUsers ? query.allUsers.map(userToOption) : [];
        if (fetchIsCurrent(lastFetched) && !options.length) {
            return;
        }
        dispatch({type: ACTION_RECEIVE_ALL_USERS, payload: options})
    }, [query.allUsers])

    return !fetchIsCurrent(lastFetched) ? <>Loading...</> : null;
}