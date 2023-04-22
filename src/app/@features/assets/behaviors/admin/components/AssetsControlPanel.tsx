import React from "react";
import { FeatureRequirement } from "@services/features/list/components/FeatureRequirement";
import { featureId__assets } from "@/featureIds";
import { AssetsAdminNavigation } from "@features/assets/behaviors/admin/components/navigation/AssetsAdminNavigation";
import { AssetsRequisiteFeatures } from "@features/assets/behaviors/admin/components/features/AssetsRequisiteFeatures";
import { AssetsAdminRoutes } from "@features/assets/behaviors/admin/components/routes/AssetsAdminRoutes";

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
