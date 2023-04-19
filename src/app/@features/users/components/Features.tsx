import {Feature} from '@services/features/item/components/Feature';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectPossibleUsersLastFetched, selectPossibleUsersList} from '../services/redux/selectors';
import {UserListQuery} from '../services/graphql/list/components/ListQuery';
import {featureId__users, featureId__userLogin, featureId__userSignup} from '../../../@/featureIds';

const requireFetch = false;
function UserLoginFeature() {
  const lastFetched = useSelector(selectPossibleUsersLastFetched)
  const list        = useSelector(selectPossibleUsersList)
  const enabled     = !requireFetch || (lastFetched ? !!list.length : false);
  return <Feature name={featureId__userLogin} enabled={enabled}/>;
}

export function UserFeatures() {
  return (
    <Feature name={featureId__users}>
      <UserLoginFeature/>
      <Feature name={featureId__userSignup}/>
    </Feature>
  );
}

UserFeatures.featureDeps =
  [
    UserListQuery,
  ];