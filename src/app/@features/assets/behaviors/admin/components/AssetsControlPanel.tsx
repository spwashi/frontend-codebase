import React from "react";
import { FeatureRequirement } from "@widgets/feature";
import { AssetsAdminNavigation } from "@features/assets/behaviors/admin/components/navigation/AssetsAdminNavigation";
import { AssetsRequisiteFeatures } from "@features/assets/behaviors/admin/components/features/AssetsRequisiteFeatures";
import { AssetsAdminRoutes } from "@features/assets/behaviors/admin/components/routes/AssetsAdminRoutes";
import { featureId__assets } from "@/features/assets/ids";

export function AssetsControlPanel() {
  return (
    <React.Fragment>
      <AssetsRequisiteFeatures />
      <FeatureRequirement name={featureId__assets}>
        <AssetsAdminNavigation />
        <AssetsAdminRoutes />
      </FeatureRequirement>
    </React.Fragment>
  );
}
