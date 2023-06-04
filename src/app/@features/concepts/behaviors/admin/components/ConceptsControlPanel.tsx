import React from "react";
import { FeatureRequirement } from "@widgets/feature";
import { ConceptsAdminNavigation } from "@features/concepts/behaviors/admin/components/navigation/ConceptsAdminNavigation";
import { ConceptsRequisiteFeatures } from "@features/concepts/behaviors/admin/components/features/ConceptsRequisiteFeatures";
import { ConceptsAdminRoutes } from "@features/concepts/behaviors/admin/components/routes/ConceptsAdminRoutes";
import { featureIds } from "@identities/features/ids";

export function ConceptsControlPanel() {
  return (
    <FeatureRequirement name={featureIds.concept.concepts}>
      <ConceptsRequisiteFeatures />
      <ConceptsAdminNavigation />
      <ConceptsAdminRoutes />
    </FeatureRequirement>
  );
}
