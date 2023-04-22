import React, { useMemo, useState } from "react";
import { SceneContext, ISceneContext } from "./context";

type ISceneContextProviderParams = {
  children?: any;
  scene?: ISceneContext["scene"];
};

/** Provides an SceneContext */
export function SceneGate(params: ISceneContextProviderParams) {
  const [scene, setScene] = useState(params.scene ?? null);
  const context = useMemo(() => ({ scene, setScene }), [scene]);

  return (
    <SceneContext.Provider value={context}>
      {params.children}
    </SceneContext.Provider>
  );
}
