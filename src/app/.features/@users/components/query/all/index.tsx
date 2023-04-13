import {gql, useQuery} from '@apollo/client';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectPossibleUsersLastFetched} from '../../../redux/selectors';
import {ACTION_RECEIVE_ALL_USERS} from '../../../redux/reducer';

export function AllUsersQuery() {
  const ALL_USERS_QUERY =
          gql`
            query AllUsers {
                allUsers {
                    id
                    name
                    username
                }
            }
        `;

  const {data: query = {}} = useQuery(ALL_USERS_QUERY);
  const dispatch           = useDispatch();
  const lastFetched        = useSelector(selectPossibleUsersLastFetched)
  useEffect(() => {
    dispatch({
               type:    ACTION_RECEIVE_ALL_USERS,
               payload: query.allUsers ? query.allUsers : [],
             })
  }, [query.allUsers])
  return !lastFetched ? <>Loading...</> : null;
}