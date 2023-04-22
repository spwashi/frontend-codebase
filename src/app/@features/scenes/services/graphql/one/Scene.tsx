import React from "react";
import { ISceneIdentifyingPartial } from "@junction/models/scene/models";
import { SceneGate } from "@features/scenes/context/Provider";
import { SceneContextDisplay } from "./components/SceneDisplay";
import { SceneQuery } from "./components/SceneQuery";

export function Scene({ id }: ISceneIdentifyingPartial) {
  if (!id) return null;
  return (
    <SceneGate>
      <SceneQuery id={id} />
      <SceneContextDisplay />
    </SceneGate>
  );
}
