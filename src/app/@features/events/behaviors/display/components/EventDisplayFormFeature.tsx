import React from "react";
import { Feature } from "@services/features/item/components/Feature";
import { FormWidget } from "@widgets/form/FormWidget";

import { FeatureRequirement } from "@services/features/list/components/FeatureRequirement";
import { EventListQuery } from "@features/events/services/graphql/list/components/EventListQuery";

import { form__selectEvent } from "@features/events/behaviors/select/config";
import { useEventSelectForm } from "@features/events/behaviors/select/hooks/useEventSelectForm";
import {
  featureId__eventDisplay,
  featureId__eventDisplayForm,
} from "../../../../../@/featureIds";
import { Event } from "../../../services/graphql/one";

export function EventDisplayFormFeature() {
  const [event, setState] = useEventSelectForm();
  return (
    <FeatureRequirement
      name={featureId__eventDisplay}
      alternative={"Need Events"}
    >
      <EventListQuery />
      <Feature name={featureId__eventDisplayForm}>
        <FormWidget config={form__selectEvent} onSubmit={setState} />
        {event && <Event id={event.id} />}
      </Feature>
    </FeatureRequirement>
  );
}
