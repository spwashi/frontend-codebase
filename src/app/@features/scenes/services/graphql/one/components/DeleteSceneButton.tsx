import { useDispatch } from "react-redux";
import React, { useCallback } from "react";
import { Log } from "@core/dev/components/Log";
import { useDeleteSceneMutation } from "@features/scenes/services/graphql/one/mutations/delete";
import { ACTION_DELETE_ONE_SCENE } from "../../../redux/reducer";

export function DeleteSceneButton({ id }: { id: number }) {
  const [deleteScene, { error }] = useDeleteSceneMutation();
  const dispatch = useDispatch();
  const doDelete = useCallback(() => {
    if (error) {
      return;
    }
    deleteScene({ variables: { id } }).then(() => {
      dispatch({ type: ACTION_DELETE_ONE_SCENE, payload: { id } });
    });
  }, [id, deleteScene]);

  return (
    <>
      {error ? (
        <Log>{{ error }}</Log>
      ) : (
        <button onClick={() => doDelete()}>Delete Scene</button>
      )}
    </>
  );
}
