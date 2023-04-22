import { Route, Routes } from "react-router";
import React from "react";
import { LoginRequirement } from "@features/users/behaviors/login/components/gates/LoginRequirement";
import { AssetUploadFormFeature } from "@features/assets/behaviors/upload/components/AssetUploadFormFeature";
import { AssetDisplayForm } from "@features/assets/behaviors/display/components/AssetDisplayForm";

export function AssetsAdminRoutes() {
  return (
    <Routes>
      <Route path="all" element={"[unimplemented]"} />
      <Route
        path=""
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
