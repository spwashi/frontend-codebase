import React from "react";
import { Feature } from "@widgets/feature";
import { EventListQuery } from "@features/events/components/query/EventListQuery";
import { EventEditForm } from "@features/events/behaviors/edit/components/EventEditForm";
import { featureId__eventEditForm } from "@/features/ids";

export function EventEditFormFeature() {
  return (
    <Feature name={featureId__eventEditForm}>
      <EventListQuery />
      <EventEditForm />
    </Feature>
  );
}
