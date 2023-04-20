import React from "react";
import { IEventIdentifyingPartial } from "@junction/models/event/models";
import { EventContextProvider } from "./context/Provider";
import { EventContextDisplay } from "./components/DisplayOne";
import { EventQuery } from "./components/FindOne";

export function Event({ id }: IEventIdentifyingPartial) {
  if (!id) return null;
  return (
    <EventContextProvider>
      <EventQuery id={id} />
      <EventContextDisplay />
    </EventContextProvider>
  );
}
