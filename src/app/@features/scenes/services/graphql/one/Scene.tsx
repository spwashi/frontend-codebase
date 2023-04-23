import React from "react";
import { SceneGate } from "@features/scenes/context/SceneGate";
import { SceneReferenceInput } from '@generated/graphql';
import { SceneContextDisplay } from "./components/SceneDisplay";
import { SceneQuery } from "./components/SceneQuery";

export function Scene({ id }: SceneReferenceInput) {
  if (!id) return null;
  return (
    <SceneGate>
      <SceneQuery id={id} />
      <SceneContextDisplay />
    </SceneGate>
  );
}
