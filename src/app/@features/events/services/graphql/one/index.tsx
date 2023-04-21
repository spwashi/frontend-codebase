import React from "react";
import { IEventIdentifyingPartial } from "@junction/models/event/models";
import { EventGate } from "@features/events/context/Provider";
import { EventContextDisplay } from "./components/EventDisplay";
import { EventQuery } from "./components/EventQuery";

export function Event({ id }: IEventIdentifyingPartial) {
  if (!id) return null;
  return (
    <EventGate>
      <EventQuery id={id} />
      <EventContextDisplay />
    </EventGate>
  );
}
