import React from "react";
import { FeatureRequirement } from "@services/features/list/components/FeatureRequirement";
import { featureId__scenes } from "../../../../../@/featureIds";
import { ScenesAdminNavigation } from "@features/scenes/behaviors/admin/components/navigation/ScenesAdminNavigation";
import { ScenesRequisiteFeatures } from "@features/scenes/behaviors/admin/components/features/ScenesRequisiteFeatures";
import { ScenesAdminRoutes } from "@features/scenes/behaviors/admin/components/routes/ScenesAdminRoutes";

export function ScenesControlPanel() {
  return (
    <React.Fragment>
      <ScenesRequisiteFeatures />
      <ScenesAdminNavigation />
      <FeatureRequirement name={featureId__scenes} alternative={"Need Scenes"}>
        <ScenesAdminRoutes />
      </FeatureRequirement>
    </React.Fragment>
  );
}
