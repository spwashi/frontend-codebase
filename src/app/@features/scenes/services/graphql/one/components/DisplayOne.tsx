import React from "react";
import { useActiveScene } from "../context/context";
import { IScene } from "@junction/models/scene/models";
import { ErrorBoundary } from "@core/error/components/ErrorBoundary";
import { DeleteSceneButton } from "./DeleteSceneButton";

interface SceneDisplayParams {
  scene: IScene;
}

function Internal({ scene }: SceneDisplayParams) {
  const { title, name } = scene as IScene;

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
export function SceneDisplay({ scene }: SceneDisplayParams) {
  const { id } = scene as IScene;
  return (
    <>
      <DeleteSceneButton id={id} />
      <ErrorBoundary>
        <Internal scene={scene} />
      </ErrorBoundary>
    </>
  );
}

/**
 * Displays scenes based on the context
 * @constructor
 */
export function SceneContextDisplay() {
  const scene = useActiveScene();
  if (!scene) return null;
  return <SceneDisplay scene={scene} />;
}
