import React from "react";
import { Feature } from "@widgets/feature";
import { EventCreateForm } from "@features/events/behaviors/create/components/EventCreateForm";
import { featureIds } from "@/features/ids";

export function EventCreateFormFeature() {
  return (
    <Feature name={featureIds.event.create_form}>
      <EventCreateForm />
    </Feature>
  );
}
