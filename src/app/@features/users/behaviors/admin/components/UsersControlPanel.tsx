import React from "react";
import { UsersRequisiteFeatures } from "@features/users/behaviors/admin/components/features/UsersRequisiteFeatures";
import { UserAdminRoutes } from "@features/users/behaviors/admin/components/routes/UserAdminRoutes";
import { UsersAdminNavigation } from "@features/users/behaviors/admin/components/navigation/UsersAdminNavigation";

export function UsersControlPanel() {
  return (
    <React.Fragment>
      <UsersRequisiteFeatures />
      <UsersAdminNavigation />
      <UserAdminRoutes />
    </React.Fragment>
  );
}
