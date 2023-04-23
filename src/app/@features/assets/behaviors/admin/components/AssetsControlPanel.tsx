import React from "react";
import { FeatureRequirement } from "@widgets/feature";
import { AssetsAdminNavigation } from "@features/assets/behaviors/admin/components/navigation/AssetsAdminNavigation";
import { AssetsRequisiteFeatures } from "@features/assets/behaviors/admin/components/features/AssetsRequisiteFeatures";
import { AssetsAdminRoutes } from "@features/assets/behaviors/admin/components/routes/AssetsAdminRoutes";
import { featureIds } from "@/features/ids";

export function AssetsControlPanel() {
  return (
    <React.Fragment>
      <AssetsRequisiteFeatures />
      <FeatureRequirement name={featureIds.asset.assets}>
        <AssetsAdminNavigation />
        <AssetsAdminRoutes />
      </FeatureRequirement>
    </React.Fragment>
  );
}
