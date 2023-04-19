import { useDispatch } from "react-redux";
import React, { useCallback } from "react";
import { Log } from "@core/dev/components/Log";
import { ACTION_DELETE_ONE_CONCEPT } from "../../../redux/reducer";
import { DeleteConceptMutationInput } from "@junction/models/concept/behaviors/delete";

import { useDeleteConceptMutation } from "@features/concepts/services/graphql/one/mutations/delete";

export function DeleteConceptButton({
  id,
}: DeleteConceptMutationInput["concept"]) {
  const [deleteConcept, { error }] = useDeleteConceptMutation();
  const dispatch = useDispatch();
  const doDelete = useCallback(() => {
    if (error) {
      return;
    }
    deleteConcept({ variables: { id } }).then(() => {
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
