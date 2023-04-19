import React from "react";
import { useSelector } from "react-redux";
import { Feature } from "@services/features/item/components/Feature";

import { FeatureRequirement } from "@services/features/list/components/FeatureRequirement";
import { UserLoginForm } from "@features/users/behaviors/login/components/forms/UserLoginForm";
import {
  featureId__userLogin,
  featureId__userLoginForm,
} from "../../../../../../@/featureIds";
import { selectLoggedInUserName } from "../../redux/reducer";

export function UserLoginFormFeature({ alt }: { alt?: any }) {
  const loggedInUser = useSelector(selectLoggedInUserName);
  if (loggedInUser) return alt ?? null;
  return (
    <Feature name={featureId__userLoginForm}>
      <FeatureRequirement
        name={featureId__userLogin}
        alternative={"Need Users"}
      >
        <UserLoginForm />
      </FeatureRequirement>
    </Feature>
  );
}
