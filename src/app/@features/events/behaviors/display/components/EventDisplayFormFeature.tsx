import React, { useState } from "react";
import { Feature, FeatureRequirement } from "@widgets/feature";
import { FormWidget } from "@widgets/form/FormWidget";
import { EventListQuery } from "@features/events/components/query/EventListQuery";
import { form__selectEvent } from "@features/events/behaviors/select/config";
import { IFormContextState } from "@widgets/form/context/types/state";
import { IEventContext } from "@features/events/context/context";
import { Event } from "../../../services/graphql/one/Event";
import { featureIds } from "@/features/ids";

export function EventDisplayFormFeature() {
  const [formState, setFormState] =
    useState<IFormContextState<{ event: IEventContext["event"] }>>();

  const event = formState?.currentValue?.event;

  return (
    <FeatureRequirement name={featureIds.event.display}>
      <EventListQuery />
      <Feature name={featureIds.event.display_form}>
        <FormWidget config={form__selectEvent} onSubmit={setFormState} />
        {event && <Event {...event} />}
      </Feature>
    </FeatureRequirement>
  );
}
