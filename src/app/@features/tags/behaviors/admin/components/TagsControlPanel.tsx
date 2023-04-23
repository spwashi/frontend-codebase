import React from "react";
import { TagsAdminNavigation } from "@features/tags/behaviors/admin/components/navigation/TagsAdminNavigation";
import { TagsRequisiteFeatures } from "@features/tags/behaviors/admin/components/features/TagsRequisiteFeatures";
import { TagsAdminRoutes } from "@features/tags/behaviors/admin/components/routes/TagsAdminRoutes";

export function TagsControlPanel() {
  return (
    <React.Fragment>
      <TagsRequisiteFeatures />
      <TagsAdminNavigation />
      <TagsAdminRoutes />
    </React.Fragment>
  );
}
