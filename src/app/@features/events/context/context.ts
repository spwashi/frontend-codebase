import { createContext } from "react";
import { Event } from '@generated/graphql';

export type IEventContext = {
  event: Event | null;
  setEvent: (event: Event) => void;
};

export const EventContext = createContext<IEventContext>({
  event: null,
  setEvent() {},
});
