import React from "react";
import { Feature } from "@services/features/item/components/Feature";
import { EventListQuery } from "@features/events/services/graphql/list/components/EventListQuery";
import { EventEditForm } from "@features/events/behaviors/edit/components/EventEditForm";
import { featureId__eventEditForm } from "../../../../../@/featureIds";

export function EventEditFormFeature() {
  return (
    <Feature name={featureId__eventEditForm}>
      <EventListQuery />
      <EventEditForm />
    </Feature>
  );
}
