import React from "react";
import { EventGate } from "@features/events/context/Provider";
import { EventContextDisplay } from "@features/events/components/display/EventDisplay";
import { EventQuery } from "@features/events/components/query/EventQuery";
import { IEventContext } from "@features/events/context/context";

export function Event(event: IEventContext["event"]) {
  if (!event?.id) return null;
  return (
    <EventGate>
      <EventQuery event={event} />
      <EventContextDisplay />
    </EventGate>
  );
}
