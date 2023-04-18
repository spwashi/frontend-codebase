import {gql, useMutation} from '@apollo/client';
import {useDispatch} from 'react-redux';
import React, {useCallback} from 'react';
import {Log} from '@core/dev/components/Log';
import {ACTION_DELETE_ONE_EVENT} from '../../../redux/reducer';

export const gqlMutationNode_DELETE_EVENT = gql`
    mutation DeleteEvent($id: Int) {
        deleteEvent (event: {id: $id}) {
            id
        }
    }
`;
function useDeleteEventMutation() {
  return useMutation(gqlMutationNode_DELETE_EVENT);
}
export function DeleteEventButton({id}: { id: number }) {
  const [deleteEvent, {error}] = useDeleteEventMutation();
  const dispatch               = useDispatch();
  const doDelete               = useCallback(() => {
    if (error) {
      return;
    }
    deleteEvent({variables: {id}})
      .then(() => {
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