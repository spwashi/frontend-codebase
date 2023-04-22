import { useDispatch } from "react-redux";
import React, { useCallback } from "react";
import { useMutation } from "@apollo/client";
import { Log } from "@core/dev/components/Log";
import { IEvent } from "@junction/models/event/models";
import { graphQlNodes } from '@/graphQlNodes';
import { ACTION_DELETE_ONE_EVENT } from "../../services/redux/reducer";

export function DeleteEventButton({ id }: { id: IEvent["id"] }) {
  const [deleteEvent, { error }] = useMutation(graphQlNodes.event.delete);
  const dispatch = useDispatch();
  const doDelete = useCallback(() => {
    if (error) {
      return;
    }
    deleteEvent({ variables: { event: { id } } }).then(() => {
      dispatch({ type: ACTION_DELETE_ONE_EVENT, payload: { id } });
    });
  }, [id, deleteEvent]);

  return (
    <>
      {error ? (
        <Log>{{ error }}</Log>
      ) : (
        <button onClick={() => doDelete()}>Delete Event</button>
      )}
    </>
  );
}
