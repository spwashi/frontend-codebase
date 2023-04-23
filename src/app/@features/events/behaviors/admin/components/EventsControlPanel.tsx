import React from "react";
import { FeatureRequirement } from "@widgets/feature";
import { EventsAdminNavigation } from "@features/events/behaviors/admin/components/navigation/EventsAdminNavigation";
import { EventsRequisiteFeatures } from "@features/events/behaviors/admin/components/features/EventsRequisiteFeatures";
import { EventsAdminRoutes } from "@features/events/behaviors/admin/components/routes/EventsAdminRoutes";
import { featureIds } from "@/features/ids";

export function EventsControlPanel() {
  return (
    <React.Fragment>
      <EventsRequisiteFeatures />
      <EventsAdminNavigation />
      <FeatureRequirement name={featureIds.event.events}>
        <EventsAdminRoutes />
      </FeatureRequirement>
    </React.Fragment>
  );
}
