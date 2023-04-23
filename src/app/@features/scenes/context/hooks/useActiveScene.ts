import { useContext } from "react";
import { ISceneContext, SceneContext } from "@features/scenes/context/context";

export function useActiveScene(): ISceneContext["scene"] {
  const { scene = null } = useContext(SceneContext) ?? {};

  return scene ?? null;
}
