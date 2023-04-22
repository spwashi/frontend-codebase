import { useQuery } from "@apollo/client";
import React, { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  IScene,
  ISceneIdentifyingPartial,
} from "@junction/models/scene/models";
import { ACTION_RECEIVE_ONE_SCENE } from "../../../redux/reducer";
import { SceneContext } from "@features/scenes/context/context";
import { graphQlNodes } from "../../../../../../@/graphQlNodes";

export function SceneQuery({ id }: ISceneIdentifyingPartial) {
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
    setScene(scene as IScene);
  }, [scene, setScene]);

  return <></>;
}
