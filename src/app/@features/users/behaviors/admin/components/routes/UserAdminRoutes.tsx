import { Route, Routes } from "react-router";
import React from "react";
import { FeatureRequirement } from "@services/features/list/components/FeatureRequirement";
import {
  featureId__userLogin,
  featureId__users,
} from '@/featureIds';
import { UserLogoutButton } from "@features/users/behaviors/logout/components/buttons/UserLogoutButton";
import { LoginChecker } from "@features/users/behaviors/login/components/actions/LoginChecker";
import { LoginRequirement } from "@features/users/behaviors/login/components/gates/LoginRequirement";
import { UserLoginFormFeature } from "@features/users/behaviors/login/components/forms/UserLoginFormFeature";
import { UserSignupFormFeature } from "@features/users/behaviors/signup/components/forms/UserSignupFormFeature";

export function UserAdminRoutes() {
  return (
    <Routes>
      <Route
        path=""
        element={
          <FeatureRequirement
            name={featureId__users}
            alternative={"Need Users"}
          >
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
        }
      />
    </Routes>
  );
}
