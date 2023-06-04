import { Route, Routes } from "react-router";
import React from "react";
import { LoginRequirement } from "@features/users/behaviors/login/components/gates/LoginRequirement";
import { AssetUploadFormFeature } from "@features/assets/behaviors/upload/components/AssetUploadFormFeature";
import { AssetDisplayForm } from "@features/assets/behaviors/display/components/AssetDisplayForm";
import { adminRoutes } from "@identities/routes/domains/adminRoutes";
import { getRouterPath } from "@identities/routes";

export function AssetsAdminRoutes() {
  return (
    <Routes>
      <Route
        path={getRouterPath(adminRoutes.assets.sub.all)}
        element={"[unimplemented]"}
      />
      <Route
        path={getRouterPath(adminRoutes.assets.sub.root)}
        element={
          <LoginRequirement>
            <AssetUploadFormFeature />
            <AssetDisplayForm />
          </LoginRequirement>
        }
      />
    </Routes>
  );
}
