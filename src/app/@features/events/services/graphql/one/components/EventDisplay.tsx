import React from "react";
import { IEvent_Complete } from "@junction/models/event/hybrids";
import { useActiveEvent } from "@features/events/context/context";
import { DeleteEventButton } from "./DeleteButton";
import {
  EventDisplayBody,
  IEventBodyParams,
} from "@features/events/services/graphql/one/components/EventDisplayBody";

export function EventDisplay({ event }: IEventBodyParams) {
  const { id } = event as IEvent_Complete;

  return (
    <>
      <DeleteEventButton id={id} />
      <EventDisplayBody event={event} />
    </>
  );
}

/**
 * Displays events based on the context
 * @constructor
 */
export function EventContextDisplay() {
  const event = useActiveEvent();
  if (!event) return null;
  return <EventDisplay event={event} />;
}
