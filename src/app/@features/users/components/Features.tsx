import {Feature} from '@services/features/components/Feature';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectPossibleUsersLastFetched, selectPossibleUsersList} from '../services/redux/selectors';
import {AllUsersQuery} from '../services/graphql/all';
import {userFeatureName, userLoginFeatureName, userSignupFeatureName} from '@features/users/features';

const requireFetch = false;
function UserLoginFeature() {
  const lastFetched = useSelector(selectPossibleUsersLastFetched)
  const list        = useSelector(selectPossibleUsersList)
  const enabled     = !requireFetch || (lastFetched ? !!list.length : false);
  return <Feature name={userLoginFeatureName} enabled={enabled}/>;
}

export function UserFeatures() {
  return (
    <Feature name={userFeatureName}>
      <UserLoginFeature/>
      <Feature name={userSignupFeatureName}/>
    </Feature>
  );
}

UserFeatures.featureDeps =
  [
    AllUsersQuery,
  ];