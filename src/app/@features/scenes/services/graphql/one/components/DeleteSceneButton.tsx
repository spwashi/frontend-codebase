import {gql, useMutation} from '@apollo/client';
import {useDispatch} from 'react-redux';
import React, {useCallback} from 'react';
import {Log} from '@core/dev/components/Log';
import {ACTION_DELETE_ONE_SCENE} from '../../../redux/reducer';

export const DELETE_SCENE_MUTATION = gql`
    mutation DeleteScene($id: Int) {
        deleteScene (scene: {id: $id}) {
            id
        }
    }
`
function useDeleteSceneMutation() {
  return useMutation(DELETE_SCENE_MUTATION);
}
export function DeleteSceneButton({id}: { id: number }) {
  const [deleteScene, {error}] = useDeleteSceneMutation();
  const dispatch               = useDispatch();
  const doDelete               = useCallback(() => {
    if (error) {
      return;
    }
    deleteScene({variables: {id}})
      .then(() => {
        dispatch({type: ACTION_DELETE_ONE_SCENE, payload: {id}})
      });
  }, [id, deleteScene]);

  return <>
    {
      error
      ? <Log>{{error}}</Log>
      : <button onClick={() => doDelete()}>Delete Scene</button>
    }
  </>
}