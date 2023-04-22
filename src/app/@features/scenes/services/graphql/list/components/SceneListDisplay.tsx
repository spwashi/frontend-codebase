import { useSelector } from "react-redux";
import React from "react";
import { selectSceneList } from "../../../redux/selectors";
import { SceneDisplay } from "../../one/components/SceneDisplay";
import { ListQuery } from "./ListQuery";

export function SceneListDisplay() {
  const allScenes = useSelector(selectSceneList);
  return (
    <>
      <ListQuery />
      {allScenes.map((scene) => (
        <SceneDisplay key={scene.id} scene={scene} />
      ))}
    </>
  );
}
