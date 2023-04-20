import React from "react";
import {
  IEvent_Complete,
  IEventTag_Complete,
} from "@junction/models/event/hybrids";
import { IEvent } from "@junction/models/event/models";
import { useActiveEvent } from "../context/context";
import { EventTag } from "./join/tag";
import { DeleteEventButton } from "./DeleteButton";

interface EventDisplayParams {
  event: IEvent | IEvent_Complete;
}

function Internal({ event }: EventDisplayParams) {
  const { title, start, end, eventTags } = event as IEvent_Complete;

  return (
    <div className="event-wrapper">
      <article className="event">
        <section>
          <header>
            <span className="title">{title}</span>
          </header>
          <section className="body">
            <div className="start">{start}</div>
            <div className="end">{end}</div>d{" "}
            <div
              style={{ border: "thick solid black", display: "inline-flex" }}
            >
              {eventTags &&
                eventTags.map(({ tag }: IEventTag_Complete) => (
                  <EventTag key={tag.id} tag={tag} event={event} />
                ))}
            </div>
          </section>
        </section>
      </article>
    </div>
  );
}
export function EventDisplay({ event }: EventDisplayParams) {
  const { id } = event as IEvent_Complete;

  return (
    <>
      <DeleteEventButton id={id} />
      <Internal event={event} />
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
