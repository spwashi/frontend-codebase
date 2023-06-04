import React from "react";
import { FeatureRequirement } from "@widgets/feature";
import { AssetsAdminNavigation } from "@features/assets/behaviors/admin/components/navigation/AssetsAdminNavigation";
import { AssetsRequisiteFeatures } from "@features/assets/behaviors/admin/components/features/AssetsRequisiteFeatures";
import { AssetsAdminRoutes } from "@features/assets/behaviors/admin/components/routes/AssetsAdminRoutes";
import { featureIds } from "@identities/features/ids";

export function AssetsControlPanel() {
  return (
    <FeatureRequirement name={featureIds.asset.assets}>
      <AssetsRequisiteFeatures />
      <AssetsAdminNavigation />
      <AssetsAdminRoutes />
    </FeatureRequirement>
  );
}
