import React, { useMemo, useState } from "react";
import { IEvent } from "@junction/models/event/models";
import { EventContext } from "./context";

type IEventContextState = {
  setEvent: (value: IEvent | null) => void;
  event: IEvent | null;
};
export function EventContextProvider({
  children,
  event: _event,
}: {
  children?: any;
  event?: IEvent;
}) {
  const [event, setEvent] = useState<IEvent | null>(_event ?? null);
  const context = useMemo(
    (): IEventContextState => ({
      event: event ?? null,
      setEvent,
    }),
    [event]
  );

  return (
    <EventContext.Provider value={context}>{children}</EventContext.Provider>
  );
}
