import { useQuery } from "@apollo/client";
import React, { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  IConcept,
  IConceptIdentifyingPartial,
} from "@junction/models/concept/models";
import { ACTION_RECEIVE_ONE_CONCEPT } from "../../../redux/reducer";
import { ConceptContext } from "@features/concepts/context/context";
import { graphQlNodes } from "../../../../../../@/graphQlNodes";
import { Concept } from "../../../../../../../__generated__/graphql";

function useConceptQuery(id: string): Concept | null {
  const { data } = useQuery(graphQlNodes.concept.fetch, {
    variables: { concept: { id } },
  });
  return data?.concept || null;
}

export function ConceptQuery({ id }: IConceptIdentifyingPartial) {
  const { setConcept } = useContext(ConceptContext);
  const dispatch = useDispatch();
  const concept = useConceptQuery(id);

  useEffect(() => {
    if (!(concept && setConcept)) return;
    dispatch({ type: ACTION_RECEIVE_ONE_CONCEPT, payload: concept });
    setConcept(concept);
  }, [concept, setConcept]);

  return <></>;
}
