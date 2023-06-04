import React from "react";
import { FeatureRequirement } from "@widgets/feature";
import { EventsAdminNavigation } from "@features/events/behaviors/admin/components/navigation/EventsAdminNavigation";
import { EventsRequisiteFeatures } from "@features/events/behaviors/admin/components/features/EventsRequisiteFeatures";
import { EventsAdminRoutes } from "@features/events/behaviors/admin/components/routes/EventsAdminRoutes";
import { featureIds } from "@identities/features/ids";

export function EventsControlPanel() {
  return (
    <FeatureRequirement name={featureIds.event.events}>
      <EventsRequisiteFeatures />
      <EventsAdminNavigation />
      <EventsAdminRoutes />
    </FeatureRequirement>
  );
}
