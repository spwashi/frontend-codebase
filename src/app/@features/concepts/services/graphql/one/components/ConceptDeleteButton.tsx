import { useDispatch } from "react-redux";
import React, { useCallback } from "react";
import { useMutation } from "@apollo/client";
import { Log } from "@core/dev/components/Log";
import { graphQlNodes } from "@identities/graphql/nodes";
import { DeleteConceptInput } from "@generated/graphql";
import { ACTION_DELETE_ONE_CONCEPT } from "../../../redux/reducer";
import { Feature } from "@widgets/feature";
import { featureIds } from "@identities/features/ids";

export function ConceptDeleteButton({ id }: DeleteConceptInput) {
  const [deleteConcept, { error }] = useMutation(graphQlNodes.concept.delete);
  const dispatch = useDispatch();
  const doDelete = useCallback(() => {
    if (error) {
      return;
    }
    deleteConcept({ variables: { concept: { id } } }).then(() => {
      dispatch({
        type: ACTION_DELETE_ONE_CONCEPT,
        payload: { id } as DeleteConceptInput,
      });
    });
  }, [id, deleteConcept]);

  return (
    <Feature name={featureIds.concept.delete}>
      {error ? (
        <Log title="Concept Delete Error">{{ error }}</Log>
      ) : (
        <button onClick={() => doDelete()}>Delete Concept</button>
      )}
    </Feature>
  );
}
