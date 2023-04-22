import { createContext } from "react";
import { Scene } from '@generated/graphql';

export type ISceneContext = {
  scene: Scene | null;
  setScene: (scene: Scene) => void;
};

export const SceneContext = createContext<ISceneContext>({
  scene: null,
  setScene() {},
});
