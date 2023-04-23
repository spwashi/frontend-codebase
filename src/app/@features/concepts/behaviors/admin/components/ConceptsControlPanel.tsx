import React from "react";
import { FeatureRequirement } from "@widgets/feature";
import { ConceptsAdminNavigation } from "@features/concepts/behaviors/admin/components/navigation/ConceptsAdminNavigation";
import { ConceptsRequisiteFeatures } from "@features/concepts/behaviors/admin/components/features/ConceptsRequisiteFeatures";
import { ConceptsAdminRoutes } from "@features/concepts/behaviors/admin/components/routes/ConceptsAdminRoutes";
import { featureIds } from "@/features/ids";

export function ConceptsControlPanel() {
  return (
    <React.Fragment>
      <ConceptsRequisiteFeatures />
      <ConceptsAdminNavigation />
      <FeatureRequirement name={featureIds.concept.concepts}>
        <ConceptsAdminRoutes />
      </FeatureRequirement>
    </React.Fragment>
  );
}
