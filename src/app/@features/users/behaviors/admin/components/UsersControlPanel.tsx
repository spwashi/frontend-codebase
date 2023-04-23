import React from "react";
import { UsersRequisiteFeatures } from "@features/users/behaviors/admin/components/features/UsersRequisiteFeatures";
import { UserAdminRoutes } from "@features/users/behaviors/admin/components/routes/UserAdminRoutes";

export function UsersControlPanel() {
  return (
    <React.Fragment>
      <UsersRequisiteFeatures />
      <UserAdminRoutes />
    </React.Fragment>
  );
}
