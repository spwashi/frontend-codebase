import React from 'react';
import {ISceneIdentifyingPartial} from '../../../../../../.junction/models/scene/models';
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