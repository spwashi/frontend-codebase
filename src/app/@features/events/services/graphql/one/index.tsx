import React from "react";
import { IEventIdentifyingPartial } from "@junction/models/event/models";
import { EventContextProvider } from "./context/Provider";
import { EventContextDisplay } from "./components/DisplayOne";
import { OneEventQuery } from "./components/FindOne";

/**
 *
 * @param title
 * @constructor
 */
export function Event({ id }: IEventIdentifyingPartial) {
  if (!id) return null;
  return (
    <EventContextProvider>
      <OneEventQuery id={id} />
      <EventContextDisplay />
    </EventContextProvider>
  );
}

export { useDeleteEventTagMutation } from "@features/events/services/graphql/one/mutations/untag";
export { gqlNode_EVENT_UNTAG } from "@features/events/services/graphql/one/mutations/untag";
