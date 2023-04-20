import { useQuery } from "@apollo/client";
import React, { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  IConcept,
  IConceptIdentifyingPartial,
} from "@junction/models/concept/models";
import { ACTION_RECEIVE_ONE_CONCEPT } from "../../../redux/reducer";
import { ConceptContext } from "../context/context";
import { graphQlNodes } from "../../../../../../@/graphQlNodes";

export function OneConceptQuery({ id }: IConceptIdentifyingPartial) {
  const context = useContext(ConceptContext) ?? ({} as any);
  const { setConcept } = context;
  const { data: query } = useQuery(graphQlNodes.concept.fetch, {
    variables: { id } as IConceptIdentifyingPartial,
  });
  const dispatch = useDispatch();
  const { concept } = query ?? {};

  useEffect(() => {
    if (!(concept && setConcept)) return;
    dispatch({ type: ACTION_RECEIVE_ONE_CONCEPT, payload: concept });
    setConcept(concept as IConcept);
  }, [concept, setConcept]);

  return <></>;
}
