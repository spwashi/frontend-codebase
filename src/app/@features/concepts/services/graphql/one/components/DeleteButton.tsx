import { useDispatch } from "react-redux";
import React, { useCallback } from "react";
import { Log } from "@core/dev/components/Log";
import { DeleteConceptMutationInput } from "@junction/models/concept/behaviors/delete";
import { ACTION_DELETE_ONE_CONCEPT } from "../../../redux/reducer";
import { useMutation } from "@apollo/client";
import { graphQlNodes } from '@/graphQlNodes';

export function DeleteConceptButton({
  id,
}: DeleteConceptMutationInput["concept"]) {
  const [deleteConcept, { error }] = useMutation(graphQlNodes.concept.delete);
  const dispatch = useDispatch();
  const doDelete = useCallback(() => {
    if (error) {
      return;
    }
    deleteConcept({ variables: { concept: { id } } }).then(() => {
      dispatch({
        type: ACTION_DELETE_ONE_CONCEPT,
        payload: { id } as DeleteConceptMutationInput["concept"],
      });
    });
  }, [id, deleteConcept]);

  return (
    <>
      {error ? (
        <Log>{{ error }}</Log>
      ) : (
        <button onClick={() => doDelete()}>Delete Concept</button>
      )}
    </>
  );
}
