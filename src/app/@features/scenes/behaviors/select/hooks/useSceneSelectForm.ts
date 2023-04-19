import { useState } from "react";

export function useSceneSelectForm() {
  const [{ data: { scene: scene } = {} as any } = {} as any, setScene] =
    useState({} as any);
  return [scene, setScene];
}
