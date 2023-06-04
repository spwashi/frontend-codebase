import { Route, Routes } from "react-router";
import React from "react";
import { FeatureRequirement } from "@widgets/feature";
import { UserLogoutButton } from "@features/users/behaviors/logout/components/buttons/UserLogoutButton";
import { LoginChecker } from "@features/users/behaviors/login/components/actions/LoginChecker";
import { LoginRequirement } from "@features/users/behaviors/login/components/gates/LoginRequirement";
import { UserLoginFormFeature } from "@features/users/behaviors/login/components/forms/UserLoginFormFeature";
import { UserSignupFormFeature } from "@features/users/behaviors/signup/components/forms/UserSignupFormFeature";
import { featureIds } from "@identities/features/ids";
import { adminRoutes } from "@identities/routes/domains/adminRoutes";
import { getRouterPath } from "@identities/routes";

export function UserAdminRoutes() {
  return (
    <Routes>
      <Route
        path={getRouterPath(adminRoutes.users.sub.root)}
        element={
          <FeatureRequirement name={featureIds.user.users}>
            <UserLogoutButton />
            <FeatureRequirement name={featureIds.user.login}>
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
