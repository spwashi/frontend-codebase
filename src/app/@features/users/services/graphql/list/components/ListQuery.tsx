import {useQuery} from '@apollo/client';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectPossibleUsersLastFetched} from '../../../redux/selectors';
import {ACTION_RECEIVE_ALL_USERS} from '../../../redux/reducer';
import {gqlNode_USER_FETCH_LIST} from '@features/users/services/graphql/list/queries/fetchList';

export function UserListQuery() {
  const {data: query = {}} = useQuery(gqlNode_USER_FETCH_LIST);
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