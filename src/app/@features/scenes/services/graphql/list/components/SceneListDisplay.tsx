import { useSelector } from "react-redux";
import React from "react";
import { selectSceneList } from "../../../redux/selectors";
import { SceneDisplay } from "../../one/components/SceneDisplay";
import { SceneListQuery } from "./SceneListQuery";

export function SceneListDisplay() {
  const allScenes = useSelector(selectSceneList);
  return (
    <>
      <SceneListQuery />
      {allScenes.map((scene) => (
        <SceneDisplay key={scene.id} scene={scene} />
      ))}
    </>
  );
}
