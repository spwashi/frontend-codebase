import React from "react";
import { ITag } from "@junction/models/tag/models";
import { IScene } from "@junction/models/scene/models";
import { useDeleteSceneTagMutation } from "@features/scenes/services/graphql/one";

export function SceneTag({ scene, tag }: { tag: ITag; scene: IScene }) {
  const { title, domain } = tag;
  const deleteTag = useDeleteSceneTagMutation();

  return (
    <div>
      <button
        onClick={() =>
          deleteTag({
            variables: {
              scene: { id: +scene.id },
              tags: [{ title, domain }],
            },
          })
        }
      >
        Remove Tag
      </button>
      <span>
        {title} {domain}
      </span>
    </div>
  );
}
