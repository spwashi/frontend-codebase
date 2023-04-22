import React from "react";
import { useActiveEvent } from "@features/events/context/hooks/useActiveEvent";
import { DeleteEventButton } from "../delete/DeleteButton";
import { EventDisplayBody, IEventBodyParams } from "./EventDisplayBody";

export function EventDisplay({ event }: IEventBodyParams) {
  if (!event) return null;
  const { id } = event;

  return (
    <>
      {id && <DeleteEventButton id={id} />}
      <EventDisplayBody event={event} />
    </>
  );
}

/**
 * Displays events based on the context
 */
export function EventContextDisplay() {
  const event = useActiveEvent();
  if (!event) return null;
  return <EventDisplay event={event} />;
}
