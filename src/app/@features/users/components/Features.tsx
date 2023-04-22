import React from "react";
import { useSelector } from "react-redux";
import { Feature } from "@widgets/feature";
import {
  selectPossibleUsersLastFetched,
  selectPossibleUsersOptions,
} from "../services/redux/selectors";
import {
  featureId__userLogin,
  featureId__users,
  featureId__userSignup,
} from "@/features/users/ids";

const requireFetch = false;

function UserLoginFeature() {
  const lastFetched = useSelector(selectPossibleUsersLastFetched);
  const list = useSelector(selectPossibleUsersOptions);
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
