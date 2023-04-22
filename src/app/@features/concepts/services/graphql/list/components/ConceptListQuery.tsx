import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFeatureQuery } from "@services/features/hooks/useFeatureQuery";
import { graphQlNodes } from "@/graphql/nodes";
import { ACTION_RECEIVE_ALL_CONCEPTS } from "../../../redux/reducer";
import {
  selectConceptStateKey,
  selectPossibleConceptsLastFetched,
} from "../../../redux/selectors";

export function ConceptListQuery() {
  const stateKey = useSelector(selectConceptStateKey);

  const { data: query } = useFeatureQuery(
    graphQlNodes.concept.fetchList,
    {},
    stateKey
  );
  const lastFetched = useSelector(selectPossibleConceptsLastFetched);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: ACTION_RECEIVE_ALL_CONCEPTS,
      payload: query.conceptList ? query.conceptList : [],
    });
  }, [query?.conceptList]);

  return !lastFetched ? <>Loading...</> : null;
}
