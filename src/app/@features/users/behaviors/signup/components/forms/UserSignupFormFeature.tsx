import React from "react";
import { useSelector } from "react-redux";
import { selectLoggedInUserName } from "../../../login/redux/reducer";
import { Feature } from "@services/features/item/components/Feature";
import { FeatureRequirement } from "@services/features/list/components/FeatureRequirement";
import {
  featureId__projectDisplay,
  featureId__userSignup,
  featureId__userSignupForm,
} from "../../../../../../@/featureIds";
import { UserSignupForm } from "@features/users/behaviors/signup/components/forms/UserSignupForm";

export function UserSignupFormFeature() {
  const loggedInUser = useSelector(selectLoggedInUserName);
  if (loggedInUser) return null;
  return (
    <FeatureRequirement
      name={featureId__userSignup}
      alternative={"Need User Signup"}
    >
      <Feature name={featureId__userSignupForm}>
        <FeatureRequirement
          name={featureId__projectDisplay}
          alternative={"Need Projects"}
        >
          <UserSignupForm />
        </FeatureRequirement>
      </Feature>
    </FeatureRequirement>
  );
}
