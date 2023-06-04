import React from "react";
import { useSelector } from "react-redux";
import { Feature, FeatureRequirement } from "@widgets/feature";
import { UserSignupForm } from "@features/users/behaviors/signup/components/forms/UserSignupForm";
import { selectLoggedInUserName } from "../../../login/redux/reducer";
import { featureIds } from "@identities/features/ids";

export function UserSignupFormFeature() {
  const loggedInUser = useSelector(selectLoggedInUserName);
  if (loggedInUser) return null;
  return (
    <FeatureRequirement name={featureIds.user.signup}>
      <UserSignupForm />
    </FeatureRequirement>
  );
}
