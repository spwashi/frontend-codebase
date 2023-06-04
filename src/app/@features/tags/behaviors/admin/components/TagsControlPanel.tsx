import React from "react";
import { TagsAdminNavigation } from "@features/tags/behaviors/admin/components/navigation/TagsAdminNavigation";
import { TagsRequisiteFeatures } from "@features/tags/behaviors/admin/components/features/TagsRequisiteFeatures";
import { TagsAdminRoutes } from "@features/tags/behaviors/admin/components/routes/TagsAdminRoutes";
import { FeatureRequirement } from "@widgets/feature";
import { featureIds } from "@identities/features/ids";

export function TagsControlPanel() {
  return (
    <FeatureRequirement name={featureIds.tag.tags}>
      <TagsRequisiteFeatures />
      <TagsAdminNavigation />
      <TagsAdminRoutes />
    </FeatureRequirement>
  );
}
