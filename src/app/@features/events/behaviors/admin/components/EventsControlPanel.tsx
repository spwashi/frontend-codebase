import React from "react";
import { Route, Routes } from "react-router";
import { EventListDisplay } from "@features/events/services/graphql/list/components/ListDisplay";
import { FeatureRequirement } from "@services/features/list/components/FeatureRequirement";
import { LoginRequirement } from "@features/users/behaviors/login/components/gates/LoginRequirement";
import { EventDisplayFormFeature } from "../../display/components/EventDisplayFormFeature";
import { featureId__events } from "../../../../../@/featureIds";
import { EventTagFormFeature } from "../../tag/components/EventTagFormFeature";
import { EventCreateFormFeature } from "../../create/components/EventCreateFormFeature";
import { EventEditFormFeature } from "../../edit/components/EventEditFormFeature";
import { EventsAdminNavigation } from "@features/events/behaviors/admin/components/EventsAdminNavigation";
import { EventsRequisiteFeatures } from "@features/events/behaviors/admin/components/EventsRequisiteFeatures";

export function EventsControlPanel() {
  return (
    <React.Fragment>
      <EventsRequisiteFeatures />
      <EventsAdminNavigation />
      <FeatureRequirement
        name={featureId__events}
        alternative={"Need Events for Admin.All Events Route"}
      >
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
      </FeatureRequirement>
    </React.Fragment>
  );
}
