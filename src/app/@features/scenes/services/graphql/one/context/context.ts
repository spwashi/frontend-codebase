import {createContext, useContext} from 'react';
import {IScene} from '@junction/models/scene/models';

type Scene =
  IScene
  | null;

type ISceneContext = {
  scene: Scene;
  setScene: (scene: Scene) => void;
};
export function useActiveScene(): Scene {
  const {scene = null} = useContext(SceneContext) ?? {};

  return scene ?? null;
}

export const SceneContext = createContext<ISceneContext | null>(null);