import {Feature} from '../_util';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectPossibleUsersLastFetched, selectPossibleUsersList} from './redux/selectors';
import {AllUsersQuery} from './components/query/all';

const requireFetch = false;
function UserLoginFeature() {
  const lastFetched = useSelector(selectPossibleUsersLastFetched)
  const list        = useSelector(selectPossibleUsersList)
  const condition   = !requireFetch || (lastFetched ? !!list.length : false);
  return <Feature name="users.login" enabled={condition}/>;
}

export function UserFeatures() {
  return (
    <Feature name="users">
      <UserLoginFeature/>
      <Feature name="users.signup"/>
    </Feature>
  );
}

UserFeatures.featureDeps =
  [
    AllUsersQuery,
  ];