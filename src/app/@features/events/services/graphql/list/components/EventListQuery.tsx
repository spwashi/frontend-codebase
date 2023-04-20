import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFeatureQuery } from "@services/features/hooks/useFeatureQuery";
import { IEvent_Complete } from "@junction/models/event/hybrids";
import { ACTION_RECEIVE_ALL_EVENTS } from "../../../redux/reducer";
import {
  selectEventStateKey,
  selectPossibleEventsLastFetched,
} from "../../../redux/selectors";
import { graphQlNodes } from "../../../../../../@/graphQlNodes";

export function EventListQuery() {
  const stateKey = useSelector(selectEventStateKey);
  const { data: query } = useFeatureQuery<{ eventList: IEvent_Complete[] }>(
    graphQlNodes.event.fetchList,
    {},
    stateKey
  );
  const lastFetched = useSelector(selectPossibleEventsLastFetched);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!query) console.error("no query");
    dispatch({
      type: ACTION_RECEIVE_ALL_EVENTS,
      payload: query.eventList ? query.eventList : [],
    });
  }, [query?.eventList]);

  return !lastFetched ? <>Loading...</> : null;
}
