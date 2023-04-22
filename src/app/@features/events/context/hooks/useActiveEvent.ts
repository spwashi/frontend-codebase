import { useContext } from "react";
import { EventContext, IEventContext } from "@features/events/context/context";

export function useActiveEvent(): IEventContext["event"] {
  const { event } = useContext(EventContext);

  return event ?? null;
}
