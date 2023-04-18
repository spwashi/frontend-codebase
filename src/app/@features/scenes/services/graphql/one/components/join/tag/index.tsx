import {gql, useMutation} from '@apollo/client';
import {ITag} from '@junction/models/tag/models';
import {IScene} from '@junction/models/scene/models';
import React from 'react';

export const gqlMutationNode_UNTAG_SCENE = gql`
    mutation UntagScene($scene: SceneReferenceInput!, $tags: [TagReferenceInput], $user: UserReferenceInput) {
        untagScene(scene: $scene, tags: $tags, user: $user) {
            scene {
                id
            }
            tag {
                id
            }
        }
    }
`;
function useDeleteSceneTagMutation() {
  const [deleteTag] = useMutation(gqlMutationNode_UNTAG_SCENE)
  return deleteTag;
}
export function SceneTag({scene, tag}: { tag: ITag, scene: IScene }) {
  const {title, domain} = tag;
  const deleteTag       = useDeleteSceneTagMutation();

  return (
    <div>
      <button onClick={() => deleteTag({
                                         variables: {
                                           scene: {id: +scene.id},
                                           tags:  [{title, domain}],
                                         },
                                       })}>Remove Tag
      </button>
      <span>{title} {domain}</span>
    </div>
  )
}