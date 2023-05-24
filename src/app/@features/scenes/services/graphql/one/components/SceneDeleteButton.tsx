import { useDispatch } from "react-redux";
import React, { useCallback } from "react";
import { useMutation } from "@apollo/client";
import { Log } from "@core/dev/components/Log";
import { graphQlNodes } from "@identities/graphql/nodes";
import { DeleteSceneInput } from "@generated/graphql";
import { ACTION_DELETE_ONE_SCENE } from "../../../redux/reducer";
import { Feature } from "@widgets/feature";
import { featureIds } from "@identities/features/ids";

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
    <Feature name={featureIds.scene.delete}>
      {error ? (
        <Log title="Scene Delete Error">{{ error }}</Log>
      ) : (
        <button onClick={() => doDelete()}>Delete Scene</button>
      )}
    </Feature>
  );
}
