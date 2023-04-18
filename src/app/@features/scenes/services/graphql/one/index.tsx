import React from 'react';
import {ISceneIdentifyingPartial} from '@junction/models/scene/models';
import {SceneContextProvider} from './context/Provider';
import {SceneContextDisplay} from './components/DisplayOne';
import {OneSceneQuery} from './components/FindOne';

/**
 *
 * @param title
 * @constructor
 */
export function Scene({id}: ISceneIdentifyingPartial) {
  if (!id) return null;
  return (
    <SceneContextProvider>
      <OneSceneQuery id={id}/>
      <SceneContextDisplay/>
    </SceneContextProvider>
  )
}
export {useDeleteSceneTagMutation} from '@features/scenes/services/graphql/one/mutations/untag';
export {gqlMutationNode_UNTAG_SCENE} from '@features/scenes/services/graphql/one/mutations/untag';