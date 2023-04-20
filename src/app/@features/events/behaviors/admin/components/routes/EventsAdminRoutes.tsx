import { Route, Routes } from "react-router";
import { EventListDisplay } from "@features/events/services/graphql/list/components/EventListDisplay";
import { LoginRequirement } from "@features/users/behaviors/login/components/gates/LoginRequirement";
import { EventCreateFormFeature } from "@features/events/behaviors/create/components/EventCreateFormFeature";
import { EventEditFormFeature } from "@features/events/behaviors/edit/components/EventEditFormFeature";
import { EventDisplayFormFeature } from "@features/events/behaviors/display/components/EventDisplayFormFeature";
import { EventTagFormFeature } from "@features/events/behaviors/tag/components/EventTagFormFeature";
import React from "react";

export function EventsAdminRoutes() {
  return (
    <Routes>
      <Route
        path={"all"}
        element={
          <div style={{ width: 500 + "px" }}>
            <EventListDisplay />
          </div>
        }
      />
      <Route
        path=""
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
