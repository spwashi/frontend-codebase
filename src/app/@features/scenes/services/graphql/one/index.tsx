import React from "react";
import { ISceneIdentifyingPartial } from "@junction/models/scene/models";
import { SceneContextProvider } from "./context/Provider";
import { SceneContextDisplay } from "./components/DisplayOne";
import { SceneQuery } from "./components/SceneQuery";

/**
 *
 * @param title
 * @constructor
 */
export function Scene({ id }: ISceneIdentifyingPartial) {
  if (!id) return null;
  return (
    <SceneContextProvider>
      <SceneQuery id={id} />
      <SceneContextDisplay />
    </SceneContextProvider>
  );
}
