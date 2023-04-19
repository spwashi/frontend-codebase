import { ProjectFeatures } from "@features/projects/components/Features";
import { LoginRequirement } from "../../login/components/gates/LoginRequirement";
import { LoginChecker } from "@features/users/behaviors/login/components/actions/LoginChecker";
import { UserLogoutButton } from "../../logout/components/buttons/UserLogoutButton";
import React from "react";
import { UserFeatures } from "../../../components/Features";
import { FeatureRequirement } from "@services/features/list/components/FeatureRequirement";
import {
  featureId__userLogin,
  featureId__users,
} from "../../../../../@/featureIds";
import { UserLoginFormFeature } from "../../login/components/forms/UserLoginFormFeature";
import { UserSignupFormFeature } from "../../signup/components/forms/UserSignupFormFeature";

export function UsersControlPanel() {
  return (
    <>
      <ProjectFeatures />
      <UserFeatures />
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
    </>
  );
}
