import {useSelector} from 'react-redux';
import {selectPossibleScenesList, selectSceneStateKey} from '../../../../redux/selectors';
import React from 'react';
import {SceneDisplay} from '../../one/components/DisplayOne';

export function AllScenesSceneDisplay() {
    const allScenes = useSelector(selectPossibleScenesList);
    const key       = useSelector(selectSceneStateKey);
    return <>
        {allScenes.map(option => <SceneDisplay key={option.payload.id} scene={option.payload}/>)}
    </>
}