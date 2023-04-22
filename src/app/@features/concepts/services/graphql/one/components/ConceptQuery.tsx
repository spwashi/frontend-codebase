import { useQuery } from "@apollo/client";
import React, { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ConceptContext } from "@features/concepts/context/context";
import { graphQlNodes } from "@/graphQlNodes";
import {
  Concept,
  ConceptReferenceInput,
} from '@generated/graphql';
import { ACTION_RECEIVE_ONE_CONCEPT } from "../../../redux/reducer";

function useConceptQuery(id: string): Concept | null {
  const { data } = useQuery(graphQlNodes.concept.fetch, {
    variables: { concept: { id } },
  });
  return data?.concept || null;
}

export function ConceptQuery({ id }: ConceptReferenceInput) {
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
