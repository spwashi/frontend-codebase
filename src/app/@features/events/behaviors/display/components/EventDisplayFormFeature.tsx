import React, { useState } from "react";
import { Feature } from "@services/features/item/components/Feature";
import { FormWidget } from "@widgets/form/FormWidget";

import { FeatureRequirement } from "@services/features/list/components/FeatureRequirement";
import { EventListQuery } from "@features/events/services/graphql/list/components/EventListQuery";

import { form__selectEvent } from "@features/events/behaviors/select/config";
import {
  featureId__eventDisplay,
  featureId__eventDisplayForm,
} from "../../../../../@/featureIds";
import { Event } from "../../../services/graphql/one";
import { IFormContextState } from "@widgets/form/context/types/state";
import { IEvent } from "@junction/models/event/models";

export function EventDisplayFormFeature() {
  const [formState, setFormState] =
    useState<IFormContextState<{ event: IEvent["id"] }>>();

  const event = formState?.currentValue?.event;

  return (
    <FeatureRequirement
      name={featureId__eventDisplay}
      alternative={"Need Events"}
    >
      <EventListQuery />
      <Feature name={featureId__eventDisplayForm}>
        <FormWidget config={form__selectEvent} onSubmit={setFormState} />
        {event && <Event id={event} />}
      </Feature>
    </FeatureRequirement>
  );
}
