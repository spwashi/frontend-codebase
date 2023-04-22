import React from "react";
import { FeatureRequirement } from "@widgets/feature";
import { featureId__concepts } from "@/features/ids";
import { ConceptsAdminNavigation } from "@features/concepts/behaviors/admin/components/navigation/ConceptsAdminNavigation";
import { ConceptsRequisiteFeatures } from "@features/concepts/behaviors/admin/components/features/ConceptsRequisiteFeatures";
import { ConceptsAdminRoutes } from "@features/concepts/behaviors/admin/components/routes/ConceptsAdminRoutes";

export function ConceptsControlPanel() {
  return (
    <React.Fragment>
      <ConceptsRequisiteFeatures />
      <ConceptsAdminNavigation />
      <FeatureRequirement name={featureId__concepts}>
        <ConceptsAdminRoutes />
      </FeatureRequirement>
    </React.Fragment>
  );
}
