import { useQuery } from "@apollo/client";
import React, { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { SceneContext } from "@features/scenes/context/context";
import { graphQlNodes } from "@/graphQlNodes";
import { ACTION_RECEIVE_ONE_SCENE } from "../../../redux/reducer";
import {
  Scene,
  SceneReferenceInput,
} from '@generated/graphql';

export function SceneQuery({ id }: SceneReferenceInput) {
  const context = useContext(SceneContext) ?? ({} as any);
  const { setScene } = context;
  const { data: query } = useQuery(graphQlNodes.scene.fetch, {
    variables: { scene: { id } },
  });
  const dispatch = useDispatch();
  const { scene } = query ?? {};
  useEffect(() => {
    if (!(scene && setScene)) return;
    dispatch({ type: ACTION_RECEIVE_ONE_SCENE, payload: scene });
    setScene(scene as Scene);
  }, [scene, setScene]);

  return <></>;
}
