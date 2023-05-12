import React from "react";
import { useSelector } from "react-redux";
import { Feature } from "@widgets/feature";
import {
  selectPossibleUsersLastFetched,
  selectPossibleUsersOptions,
} from "../services/redux/selectors";
import { featureIds } from "@identities/features/ids";

const requireFetch = false;

function UserLoginFeature() {
  const lastFetched = useSelector(selectPossibleUsersLastFetched);
  const list = useSelector(selectPossibleUsersOptions);
  const enabled = !requireFetch || (lastFetched ? !!list.length : false);
  return <Feature name={featureIds.user.login} enabled={enabled} />;
}

export function UserFeatures() {
  return (
    <Feature name={featureIds.user.users}>
      <UserLoginFeature />
      <Feature name={featureIds.user.signup} />
    </Feature>
  );
}
