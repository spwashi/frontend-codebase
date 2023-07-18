import { Route, Routes } from "react-router";
import React from "react";
import { EventListDisplay } from "@features/events/components/list/EventListDisplay";
import { LoginRequirement } from "@features/users/behaviors/login/components/gates/LoginRequirement";
import { EventCreateFormFeature } from "@features/events/behaviors/create/components/EventCreateFormFeature";
import { EventEditFormFeature } from "@features/events/behaviors/edit/components/EventEditFormFeature";
import { EventDisplayFormFeature } from "@features/events/behaviors/display/components/EventDisplayFormFeature";
import { EventTagFormFeature } from "@features/events/behaviors/tag/components/EventTagFormFeature";
import { adminRoutes } from "@identities/routes/domains/adminRoutes";
import { getRouterPath } from "@identities/routes";
import { featureIds } from "@identities/features/ids";
import { FeatureRequirement } from "@widgets/feature";
import ReactJson from "react-json-view";

export function EventsAdminRoutes() {
  return (
    <FeatureRequirement name={featureIds.event.events}>
      <Routes>
        <Route
          path={getRouterPath(adminRoutes.events.subConfigMap.all)}
          element={<EventListDisplay />}
        />
        <Route
          path={getRouterPath(adminRoutes.events.subConfigMap.root)}
          element={
            <React.Fragment>
              <EventCreateFormFeature />
              <EventEditFormFeature />
              <EventDisplayFormFeature />
              <EventTagFormFeature />
            </React.Fragment>
          }
        />
      </Routes>
    </FeatureRequirement>
  );
}
