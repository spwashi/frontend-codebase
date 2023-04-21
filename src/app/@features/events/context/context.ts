import { createContext, useContext } from "react";
import { Event } from "../../../../__generated__/graphql";

export type IEventContext = {
  event: Event | null;
  setEvent: (event: Event) => void;
};

export const EventContext = createContext<IEventContext>({
  event: null,
  setEvent() {},
});

export function useActiveEvent(): IEventContext["event"] {
  const { event } = useContext(EventContext);

  return event ?? null;
}
