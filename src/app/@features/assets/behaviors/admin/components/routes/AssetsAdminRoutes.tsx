import { Route, Routes } from "react-router";
import React from "react";
import { LoginRequirement } from "@features/users/behaviors/login/components/gates/LoginRequirement";
import { AssetUploadFormFeature } from "@features/assets/behaviors/upload/components/AssetUploadFormFeature";
import { AssetDisplayForm } from "@features/assets/behaviors/display/components/AssetDisplayForm";
import { adminRoutes } from "@identities/routes/domains/adminRoutes";

export function AssetsAdminRoutes() {
  return (
    <Routes>
      <Route
        path={adminRoutes.assets.sub.all.path}
        element={"[unimplemented]"}
      />
      <Route
        path={adminRoutes.assets.sub.root.path}
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
