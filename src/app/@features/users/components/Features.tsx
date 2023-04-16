import {Feature} from '@services/features/item/components/Feature';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectPossibleUsersLastFetched, selectPossibleUsersList} from '../services/redux/selectors';
import {AllUsersQuery} from '../services/graphql/all';
import {feature_users, feature_userLogin, feature_userSignup} from '../../../@/featureIds';

const requireFetch = false;
function UserLoginFeature() {
  const lastFetched = useSelector(selectPossibleUsersLastFetched)
  const list        = useSelector(selectPossibleUsersList)
  const enabled     = !requireFetch || (lastFetched ? !!list.length : false);
  return <Feature name={feature_userLogin} enabled={enabled}/>;
}

export function UserFeatures() {
  return (
    <Feature name={feature_users}>
      <UserLoginFeature/>
      <Feature name={feature_userSignup}/>
    </Feature>
  );
}

UserFeatures.featureDeps =
  [
    AllUsersQuery,
  ];