import React from "react";
import { useSelector } from "react-redux";
import { Feature } from "@widgets/feature";

import { FeatureRequirement } from "@widgets/feature";
import { UserLoginForm } from "@features/users/behaviors/login/components/forms/UserLoginForm";
import { featureId__userLogin, featureId__userLoginForm } from "@/features/ids";
import { selectLoggedInUserName } from "../../redux/reducer";

export function UserLoginFormFeature({ alt }: { alt?: any }) {
  const loggedInUser = useSelector(selectLoggedInUserName);
  if (loggedInUser) return alt ?? null;
  return (
    <Feature name={featureId__userLoginForm}>
      <FeatureRequirement name={featureId__userLogin}>
        <UserLoginForm />
      </FeatureRequirement>
    </Feature>
  );
}
