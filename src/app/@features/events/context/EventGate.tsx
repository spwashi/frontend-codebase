import React, { useMemo, useState } from "react";
import { EventContext, IEventContext } from "./context";

type IEventContextProviderParams = {
  children?: any;
  event?: IEventContext["event"];
};

/** Provides an EventContext */
export function EventGate(params: IEventContextProviderParams) {
  const [event, setEvent] = useState(params.event ?? null);
  const context = useMemo(() => ({ event, setEvent }), [event]);

  return (
    <EventContext.Provider value={context}>
      {params.children}
    </EventContext.Provider>
  );
}
