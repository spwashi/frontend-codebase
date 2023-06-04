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

export function EventsAdminRoutes() {
  return (
    <Routes>
      <Route
        path={getRouterPath(adminRoutes.events.sub.all)}
        element={
          <div style={{ width: 500 + "px" }}>
            <EventListDisplay />
          </div>
        }
      />
      <Route
        path={getRouterPath(adminRoutes.events.sub.root)}
        element={
          <LoginRequirement>
            <EventCreateFormFeature />
            <EventEditFormFeature />
            <EventDisplayFormFeature />
            <EventTagFormFeature />
          </LoginRequirement>
        }
      />
    </Routes>
  );
}
