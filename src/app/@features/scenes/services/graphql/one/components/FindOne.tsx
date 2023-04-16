import {IScene, ISceneIdentifyingPartial} from '@junction/models/scene/models';
import {gql, useQuery} from '@apollo/client';
import React, {useContext, useEffect} from 'react';
import {SceneContext} from '../context/context';
import {useDispatch} from 'react-redux';
import {ACTION_RECEIVE_ONE_SCENE} from '../../../redux/reducer';

export const SCENE_QUERY = gql`
    query Scene($id: String!) {
        scene(id: $id) {
            id
            name
            title
            description
        }
    }
`;

export function OneSceneQuery({id}: ISceneIdentifyingPartial) {
  const context       = useContext(SceneContext) ?? ({} as any);
  const {setScene}    = context;
  const {data: query} = useQuery(SCENE_QUERY, {variables: {id}});
  const dispatch      = useDispatch();
  const {scene}       = query ?? {};
  useEffect(() => {
    if (!(scene && setScene)) return;
    dispatch({type: ACTION_RECEIVE_ONE_SCENE, payload: scene})
    setScene(scene as IScene);
  }, [scene, setScene]);

  return <></>
}