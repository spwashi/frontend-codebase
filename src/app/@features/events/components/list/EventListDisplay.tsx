import { useSelector } from "react-redux";
import React from "react";
import { selectEventList } from "../../services/redux/selectors";
import { EventDisplay } from "../display/EventDisplay";

export function EventListDisplay() {
  const allEvents = useSelector(selectEventList);
  return (
    <>
      {allEvents.map((event) => (
        <EventDisplay key={event.id} event={event} />
      ))}
    </>
  );
}
