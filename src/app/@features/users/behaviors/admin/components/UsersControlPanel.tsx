import React from "react";
import { LoginChecker } from "@features/users/behaviors/login/components/actions/LoginChecker";
import { FeatureRequirement } from "@services/features/list/components/FeatureRequirement";
import { LoginRequirement } from "../../login/components/gates/LoginRequirement";
import { UserLogoutButton } from "../../logout/components/buttons/UserLogoutButton";
import {
  featureId__userLogin,
  featureId__users,
} from "../../../../../@/featureIds";
import { UserLoginFormFeature } from "../../login/components/forms/UserLoginFormFeature";
import { UserSignupFormFeature } from "../../signup/components/forms/UserSignupFormFeature";
import { UsersRequisiteFeatures } from "@features/users/behaviors/admin/components/UsersRequisiteFeatures";

export function UsersControlPanel() {
  return (
    <React.Fragment>
      <UsersRequisiteFeatures />
      <FeatureRequirement name={featureId__users} alternative={"Need Users"}>
        <UserLogoutButton />
        <FeatureRequirement
          name={featureId__userLogin}
          alternative={"Need User Login"}
        >
          <LoginChecker />
          <LoginRequirement state={false}>
            <UserLoginFormFeature />
            <UserSignupFormFeature />
          </LoginRequirement>
        </FeatureRequirement>
      </FeatureRequirement>
    </React.Fragment>
  );
}
