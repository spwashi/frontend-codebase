import { useSelector } from "react-redux";
import React from "react";
import {
  selectEventList,
  selectPossibleEventOptions,
} from "../../../redux/selectors";
import { EventDisplay } from "../../one/components/DisplayOne";

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
