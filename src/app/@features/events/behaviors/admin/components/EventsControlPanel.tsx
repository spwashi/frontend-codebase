import React from "react";
import { FeatureRequirement } from "@widgets/feature";
import { featureId__events } from "@/features/ids";
import { EventsAdminNavigation } from "@features/events/behaviors/admin/components/navigation/EventsAdminNavigation";
import { EventsRequisiteFeatures } from "@features/events/behaviors/admin/components/features/EventsRequisiteFeatures";
import { EventsAdminRoutes } from "@features/events/behaviors/admin/components/routes/EventsAdminRoutes";

export function EventsControlPanel() {
  return (
    <React.Fragment>
      <EventsRequisiteFeatures />
      <EventsAdminNavigation />
      <FeatureRequirement name={featureId__events}>
        <EventsAdminRoutes />
      </FeatureRequirement>
    </React.Fragment>
  );
}
