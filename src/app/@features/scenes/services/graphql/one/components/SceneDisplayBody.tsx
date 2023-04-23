import React from "react";
import { ISceneContext } from "@features/scenes/context/context";

export interface SceneDisplayParams {
  scene: ISceneContext["scene"];
}

export function SceneDisplayBody({ scene }: SceneDisplayParams) {
  if (!scene) return null;
  const { title, name } = scene;

  return (
    <div className="scene-wrapper">
      <article className="scene">
        <section>
          <header>
            <span className="title">{title}</span>
          </header>
          <section className="body">
            <div className="name">{name}</div>
          </section>
        </section>
      </article>
    </div>
  );
}
