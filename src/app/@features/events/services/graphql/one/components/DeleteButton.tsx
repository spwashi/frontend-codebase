import { useDispatch } from "react-redux";
import React, { useCallback } from "react";
import { Log } from "@core/dev/components/Log";
import { ACTION_DELETE_ONE_EVENT } from "../../../redux/reducer";
import { IEvent } from "@junction/models/event/models";
import { useMutation } from "@apollo/client";
import { graphQlNodes } from "../../../../../../@/graphQlNodes";

export function DeleteEventButton({ id }: { id: IEvent["id"] }) {
  const [deleteEvent, { error }] = useMutation(graphQlNodes.event.delete);
  const dispatch = useDispatch();
  const doDelete = useCallback(() => {
    if (error) {
      return;
    }
    deleteEvent({ variables: { id } }).then(() => {
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
