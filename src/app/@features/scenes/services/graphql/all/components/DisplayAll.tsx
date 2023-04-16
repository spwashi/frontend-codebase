import {useSelector} from 'react-redux';
import {selectPossibleScenesList} from '../../../redux/selectors';
import React from 'react';
import {SceneDisplay} from '../../one/components/DisplayOne';
import {SceneListQuery} from './FindAll';

export function AllScenesSceneDisplay() {
  const allScenes = useSelector(selectPossibleScenesList);
  return (
    <>
      <SceneListQuery/>
      {allScenes.map(option => <SceneDisplay key={option.payload.id} scene={option.payload}/>)}
    </>

  )
}