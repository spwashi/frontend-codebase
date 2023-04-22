import React from "react";
import { DeleteSceneButton } from "./DeleteSceneButton";
import { useActiveScene } from "@features/scenes/context/hooks/useActiveScene";
import { SceneDisplayBody, SceneDisplayParams } from "./SceneDisplayBody";

export function SceneDisplay({ scene }: SceneDisplayParams) {
  if (!scene) return null;
  const { id } = scene;

  return (
    <>
      {id && <DeleteSceneButton id={id} />}
      <SceneDisplayBody scene={scene} />
    </>
  );
}

/**
 * Displays scenes based on the context
 */
export function SceneContextDisplay() {
  const scene = useActiveScene();
  if (!scene) return null;
  return <SceneDisplay scene={scene} />;
}
