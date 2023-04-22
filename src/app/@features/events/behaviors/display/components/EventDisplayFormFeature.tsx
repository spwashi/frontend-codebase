import React, { useState } from "react";
import { Feature } from "@widgets/feature";
import { FormWidget } from "@widgets/form/FormWidget";
import { FeatureRequirement } from "@widgets/feature";
import { EventListQuery } from "@features/events/components/query/EventListQuery";
import { form__selectEvent } from "@features/events/behaviors/select/config";
import {
  featureId__eventDisplay,
  featureId__eventDisplayForm,
} from "@/features/ids";
import { IFormContextState } from "@widgets/form/context/types/state";
import { IEventContext } from "@features/events/context/context";
import { Event } from "../../../services/graphql/one/Event";

export function EventDisplayFormFeature() {
  const [formState, setFormState] =
    useState<IFormContextState<{ event: IEventContext["event"] }>>();

  const event = formState?.currentValue?.event;

  return (
    <FeatureRequirement name={featureId__eventDisplay}>
      <EventListQuery />
      <Feature name={featureId__eventDisplayForm}>
        <FormWidget config={form__selectEvent} onSubmit={setFormState} />
        {event && <Event {...event} />}
      </Feature>
    </FeatureRequirement>
  );
}
