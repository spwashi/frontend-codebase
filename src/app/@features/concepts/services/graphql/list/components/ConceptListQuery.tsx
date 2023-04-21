import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFeatureQuery } from "@services/features/hooks/useFeatureQuery";
import { IConcept_Complete } from "@junction/models/concept/hybrids";
import { ACTION_RECEIVE_ALL_CONCEPTS } from "../../../redux/reducer";
import {
  selectConceptStateKey,
  selectPossibleConceptsLastFetched,
} from "../../../redux/selectors";
import { graphQlNodes } from "../../../../../../@/graphQlNodes";

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
