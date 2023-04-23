import React from "react";
import { Feature } from "@widgets/feature";
import { EventListQuery } from "@features/events/components/query/EventListQuery";
import { EventEditForm } from "@features/events/behaviors/edit/components/EventEditForm";
import { featureIds } from "@/features/ids";

export function EventEditFormFeature() {
  return (
    <Feature name={featureIds.event.edit_form}>
      <EventListQuery />
      <EventEditForm />
    </Feature>
  );
}
