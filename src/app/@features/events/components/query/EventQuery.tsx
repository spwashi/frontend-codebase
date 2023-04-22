import { useQuery } from "@apollo/client";
import React, { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  IEvent,
  IEventIdentifyingPartial,
} from "@junction/models/event/models";
import { ACTION_RECEIVE_ONE_EVENT } from "../../services/redux/reducer";
import { EventContext, IEventContext } from "@features/events/context/context";
import { graphQlNodes } from "../../../../@/graphQlNodes";
import { Event } from "../../../../../__generated__/graphql";

export function EventQuery(variables: { event: Event }) {
  const context = useContext(EventContext);
  const { data } = useQuery(graphQlNodes.event.fetch, { variables });
  const event = data?.event;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!event) return;
    dispatch({ type: ACTION_RECEIVE_ONE_EVENT, payload: event });
    context.setEvent(event as IEvent);
  }, [event]);

  return <></>;
}
