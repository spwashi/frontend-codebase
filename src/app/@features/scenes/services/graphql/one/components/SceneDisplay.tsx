import React from "react";
import { useActiveScene } from "@features/scenes/context/hooks/useActiveScene";
import { SceneDeleteButton } from "./SceneDeleteButton";
import { SceneDisplayBody, SceneDisplayParams } from "./SceneDisplayBody";

export function SceneDisplay({ scene }: SceneDisplayParams) {
  if (!scene) return null;
  const { id } = scene;

  return (
    <>
      {id && <SceneDeleteButton id={id} />}
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
