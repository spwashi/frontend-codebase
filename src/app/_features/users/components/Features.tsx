import {Feature} from '../../../_services/features/components/Feature';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectPossibleUsersLastFetched, selectPossibleUsersList} from '../services/redux/selectors';
import {AllUsersQuery} from '../services/graphql/all';

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