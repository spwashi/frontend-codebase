import { useDispatch } from "react-redux";
import React, { useCallback } from "react";
import { useMutation } from "@apollo/client";
import { Log } from "@core/dev/components/Log";
import { graphQlNodes } from "@/graphQlNodes";
import { ACTION_DELETE_ONE_SCENE } from "../../../redux/reducer";
import { DeleteSceneInput } from "../../../../../../../__generated__/graphql";

export function SceneDeleteButton({ id }: DeleteSceneInput) {
  const [deleteScene, { error }] = useMutation(graphQlNodes.scene.delete);
  const dispatch = useDispatch();
  const doDelete = useCallback(() => {
    if (error) {
      return;
    }
    deleteScene({ variables: { scene: { id } } }).then(() => {
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
