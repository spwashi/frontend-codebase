import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFeatureQuery } from "@services/features/hooks/useFeatureQuery";
import { IConcept_Complete } from "@junction/models/concept/hybrids";
import { gqlNode_CONCEPT_FETCH_LIST } from "@features/concepts/services/graphql/list/queries/fetchList";
import { ACTION_RECEIVE_ALL_CONCEPTS } from "../../../redux/reducer";
import {
  selectConceptStateKey,
  selectPossibleConceptsLastFetched,
} from "../../../redux/selectors";

export function ConceptListQuery() {
  const stateKey = useSelector(selectConceptStateKey);

  const { data: query } = useFeatureQuery<{ conceptList: IConcept_Complete[] }>(
    gqlNode_CONCEPT_FETCH_LIST,
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
