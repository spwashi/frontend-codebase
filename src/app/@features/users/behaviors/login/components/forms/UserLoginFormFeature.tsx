import React from "react";
import { useSelector } from "react-redux";
import { Feature, FeatureRequirement } from "@widgets/feature";
import { UserLoginForm } from "@features/users/behaviors/login/components/forms/UserLoginForm";
import { selectLoggedInUserName } from "../../redux/reducer";
import { featureIds } from "@/features/ids";

export function UserLoginFormFeature({ alt }: { alt?: any }) {
  const loggedInUser = useSelector(selectLoggedInUserName);
  if (loggedInUser) return alt ?? null;
  return (
    <FeatureRequirement name={featureIds.user.login}>
      <Feature name={featureIds.user.login_form}>
        <UserLoginForm />
      </Feature>
    </FeatureRequirement>
  );
}
