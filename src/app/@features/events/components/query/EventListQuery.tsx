import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFeatureQuery } from "@services/features/hooks/useFeatureQuery";
import { graphQlNodes } from '@/graphQlNodes';
import { ACTION_RECEIVE_ALL_EVENTS } from "../../services/redux/reducer";
import {
  selectEventStateKey,
  selectPossibleEventsLastFetched,
} from "../../services/redux/selectors";

function useEventListQuery() {
  const stateKey = useSelector(selectEventStateKey);
  const { data: query } = useFeatureQuery(
    graphQlNodes.event.fetchList,
    null,
    stateKey
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (!query) console.error("no query");
    dispatch({
      type: ACTION_RECEIVE_ALL_EVENTS,
      payload: query.eventList ? query.eventList : [],
    });
  }, [query?.eventList]);
}

export function EventListQuery() {
  const lastFetched = useSelector(selectPossibleEventsLastFetched);
  useEventListQuery();

  return !lastFetched ? <>Loading...</> : null;
}
