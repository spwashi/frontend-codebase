import { useSelector } from "react-redux";
import React from "react";
import { selectPossibleScenesList } from "../../../redux/selectors";
import { SceneDisplay } from "../../one/components/DisplayOne";
import { ListQuery } from "./ListQuery";

export function ListDisplay() {
  const allScenes = useSelector(selectPossibleScenesList);
  return (
    <>
      <ListQuery />
      {allScenes.map((option) => (
        <SceneDisplay key={option.payload.id} scene={option.payload} />
      ))}
    </>
  );
}
