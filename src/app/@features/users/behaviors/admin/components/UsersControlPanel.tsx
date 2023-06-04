import React from "react";
import { UsersRequisiteFeatures } from "@features/users/behaviors/admin/components/features/UsersRequisiteFeatures";
import { UserAdminRoutes } from "@features/users/behaviors/admin/components/routes/UserAdminRoutes";
import { UsersAdminNavigation } from "@features/users/behaviors/admin/components/navigation/UsersAdminNavigation";
import { FeatureRequirement } from "@widgets/feature";
import { featureIds } from "@identities/features/ids";

export function UsersControlPanel() {
  return (
    <FeatureRequirement name={featureIds.user.users}>
      <UsersRequisiteFeatures />
      <UsersAdminNavigation />
      <UserAdminRoutes />
    </FeatureRequirement>
  );
}
