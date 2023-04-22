import React from "react";
import { SceneGate } from "@features/scenes/context/SceneGate";
import { SceneContextDisplay } from "./components/SceneDisplay";
import { SceneQuery } from "./components/SceneQuery";
import { SceneReferenceInput } from "../../../../../../__generated__/graphql";

export function Scene({ id }: SceneReferenceInput) {
  if (!id) return null;
  return (
    <SceneGate>
      <SceneQuery id={id} />
      <SceneContextDisplay />
    </SceneGate>
  );
}
