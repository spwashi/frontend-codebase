import React from "react";
import { Feature } from "@services/features/item/components/Feature";
import { EventCreateForm } from "@features/events/behaviors/create/components/EventCreateForm";
import { featureId__eventCreateForm } from "@/features/ids";

export function EventCreateFormFeature() {
  return (
    <Feature name={featureId__eventCreateForm}>
      <EventCreateForm />
    </Feature>
  );
}
