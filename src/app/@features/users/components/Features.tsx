import React from "react";
import { useSelector } from "react-redux";
import { Feature } from "@services/features/item/components/Feature";
import {
  selectPossibleUsersLastFetched,
  selectPossibleUsersList,
} from "../services/redux/selectors";
import { UserListQuery } from "../services/graphql/list/components/ListQuery";
import {
  featureId__userLogin,
  featureId__userSignup,
  featureId__users,
} from "../../../@/featureIds";

const requireFetch = false;

function UserLoginFeature() {
  const lastFetched = useSelector(selectPossibleUsersLastFetched);
  const list = useSelector(selectPossibleUsersList);
  const enabled = !requireFetch || (lastFetched ? !!list.length : false);
  return <Feature name={featureId__userLogin} enabled={enabled} />;
}

export function UserFeatures() {
  return (
    <Feature name={featureId__users}>
      <UserLoginFeature />
      <Feature name={featureId__userSignup} />
    </Feature>
  );
}

UserFeatures.featureDeps = [UserListQuery];
