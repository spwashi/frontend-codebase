import React from "react";
import { useSelector } from "react-redux";
import { Feature } from "@widgets/feature";
import { FeatureRequirement } from "@widgets/feature";
import { UserSignupForm } from "@features/users/behaviors/signup/components/forms/UserSignupForm";
import {
  featureId__projectDisplay,
  featureId__userSignup,
  featureId__userSignupForm,
} from "@/features/ids";
import { selectLoggedInUserName } from "../../../login/redux/reducer";

export function UserSignupFormFeature() {
  const loggedInUser = useSelector(selectLoggedInUserName);
  if (loggedInUser) return null;
  return (
    <FeatureRequirement name={featureId__userSignup}>
      <Feature name={featureId__userSignupForm}>
        <FeatureRequirement name={featureId__projectDisplay}>
          <UserSignupForm />
        </FeatureRequirement>
      </Feature>
    </FeatureRequirement>
  );
}
