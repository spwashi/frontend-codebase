import {useSelector} from 'react-redux';
import {selectPossibleScenesList} from '../../../redux/selectors';
import React from 'react';
import {SceneDisplay} from '../../one/components/DisplayOne';
import {ListQuery} from './ListQuery';

export function ListDisplay() {
  const allScenes = useSelector(selectPossibleScenesList);
  return (
    <>
      <ListQuery/>
      {allScenes.map(option => <SceneDisplay key={option.payload.id} scene={option.payload}/>)}
    </>

  )
}