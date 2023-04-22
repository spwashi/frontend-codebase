import React from "react";
import { FeatureRequirement } from "@widgets/feature";
import { ScenesAdminNavigation } from "@features/scenes/behaviors/admin/components/navigation/ScenesAdminNavigation";
import { ScenesRequisiteFeatures } from "@features/scenes/behaviors/admin/components/features/ScenesRequisiteFeatures";
import { ScenesAdminRoutes } from "@features/scenes/behaviors/admin/components/routes/ScenesAdminRoutes";
import { featureId__scenes } from "@/features/scenes/ids";

export function ScenesControlPanel() {
  return (
    <React.Fragment>
      <ScenesRequisiteFeatures />
      <ScenesAdminNavigation />
      <FeatureRequirement name={featureId__scenes}>
        <ScenesAdminRoutes />
      </FeatureRequirement>
    </React.Fragment>
  );
}
