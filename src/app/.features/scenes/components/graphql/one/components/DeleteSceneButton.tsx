import {gql, useMutation} from '@apollo/client';
import {useDispatch} from 'react-redux';
import React, {useCallback} from 'react';
import {Log} from '../../../../../../components/dev/Log';
import {ACTION_DELETE_ONE_SCENE} from '../../../../.services/.redux/reducer';

function useDeleteSceneMutation() {
  const DELETE_SCENE = gql`
      mutation DeleteScene($id: Int) {
          deleteScene (scene: {id: $id}) {
              id
          }
      }
  `

  return useMutation(DELETE_SCENE);
}
export function DeleteSceneButton({id}: { id: number }) {
  const [deleteScene, {error, data}] = useDeleteSceneMutation();
  const dispatch                     = useDispatch();
  const doDelete                     = useCallback(() => {
    if (error) {
      return;
    }
    deleteScene({variables: {id}})
      .then(e => {
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