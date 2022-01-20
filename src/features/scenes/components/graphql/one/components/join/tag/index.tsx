import {gql, useMutation} from '@apollo/client';
import {ITag} from '../../../../../../../../models/tag/models';
import {IScene} from '../../../../../../../../models/scene/models';
import React from 'react';

function useDeleteSceneTagMutation() {
  const DELETE_TAG = gql`
      mutation DeleteSceneTag($scene: SceneIdInput!, $tags: [TagReferenceInput]) {
          untagScene(scene: $scene, tags: $tags)
      }
  `;

    const [deleteTag, response] = useMutation(DELETE_TAG)
    return deleteTag;
}
export function SceneTag({scene, tag}: { tag: ITag, scene: IScene }) {
    const {title, domain} = tag;
    const deleteTag       = useDeleteSceneTagMutation();

    return (
        <div style={{border: 'thin solid red'}}>
            <button onClick={e => deleteTag({
                                                variables: {
                                                    scene: {id: +scene.id},
                                                    tags:    [{title, domain}],
                                                },
                                            })}>Remove Tag
            </button>
            <span>{title} {domain}</span>
        </div>
    )
}