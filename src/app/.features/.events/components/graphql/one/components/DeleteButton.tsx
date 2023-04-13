import {gql, useMutation} from '@apollo/client';
import {useDispatch} from 'react-redux';
import React, {useCallback} from 'react';
import {Log} from '../../../../../../components/dev/Log';
import {ACTION_DELETE_ONE_EVENT} from '../../../../.services/.redux/reducer';

function useDeleteEventMutation() {
  const DELETE_EVENT = gql`
      mutation DeleteEvent($id: Int) {
          deleteEvent (event: {id: $id}) {
              id
          }
      }
  `

  return useMutation(DELETE_EVENT);
}
export function DeleteEventButton({id}: { id: number }) {
  const [deleteEvent, {error, data}] = useDeleteEventMutation();
  const dispatch                     = useDispatch();
  const doDelete                     = useCallback(() => {
    if (error) {
      return;
    }
    deleteEvent({variables: {id}})
      .then(e => {
        dispatch({type: ACTION_DELETE_ONE_EVENT, payload: {id}})
      });
  }, [id, deleteEvent]);

  return <>
    {
      error
      ? <Log>{{error}}</Log>
      : <button onClick={() => doDelete()}>Delete Event</button>
    }
  </>
}