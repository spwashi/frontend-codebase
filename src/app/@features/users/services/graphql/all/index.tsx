import {gql, useQuery} from '@apollo/client';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectPossibleUsersLastFetched} from '../../redux/selectors';
import {ACTION_RECEIVE_ALL_USERS} from '../../redux/reducer';

export const gqlQueryNode_USER_LIST = gql`
    query UserList {
        userList {
            id
            name
            username
        }
    }
`;

export function UserListQuery() {
  const {data: query = {}} = useQuery(gqlQueryNode_USER_LIST);
  const dispatch           = useDispatch();
  const lastFetched        = useSelector(selectPossibleUsersLastFetched)
  useEffect(() => {
    dispatch({
               type:    ACTION_RECEIVE_ALL_USERS,
               payload: query.userList ? query.userList : [],
             })
  }, [query.userList])
  return !lastFetched ? <>Loading...</> : null;
}