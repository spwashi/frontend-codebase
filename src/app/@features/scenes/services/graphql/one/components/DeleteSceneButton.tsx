import { useDispatch } from "react-redux";
import React, { useCallback } from "react";
import { Log } from "@core/dev/components/Log";
import { ACTION_DELETE_ONE_SCENE } from "../../../redux/reducer";
import { IScene } from "@junction/models/scene/models";
import { useMutation } from "@apollo/client";
import { graphQlNodes } from "../../../../../../@/graphQlNodes";

export function DeleteSceneButton({ id }: { id: IScene["id"] }) {
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
