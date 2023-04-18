import {IScene, ISceneIdentifyingPartial} from '@junction/models/scene/models';
import {useQuery} from '@apollo/client';
import React, {useContext, useEffect} from 'react';
import {SceneContext} from '../context/context';
import {useDispatch} from 'react-redux';
import {ACTION_RECEIVE_ONE_SCENE} from '../../../redux/reducer';
import {gqlNode_SCENE_FINDONE} from '@features/scenes/services/graphql/queries/one/find';

export function OneSceneQuery({id}: ISceneIdentifyingPartial) {
  const context       = useContext(SceneContext) ?? ({} as any);
  const {setScene}    = context;
  const {data: query} = useQuery(gqlNode_SCENE_FINDONE, {variables: {id}});
  const dispatch      = useDispatch();
  const {scene}       = query ?? {};
  useEffect(() => {
    if (!(scene && setScene)) return;
    dispatch({type: ACTION_RECEIVE_ONE_SCENE, payload: scene})
    setScene(scene as IScene);
  }, [scene, setScene]);

  return <></>
}