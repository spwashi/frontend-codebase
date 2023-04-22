import { useDispatch } from "react-redux";
import React, { useCallback } from "react";
import { useMutation } from "@apollo/client";
import { Log } from "@core/dev/components/Log";
import { graphQlNodes } from "@/graphQlNodes";
import { ACTION_DELETE_ONE_EVENT } from "../../services/redux/reducer";
import { DeleteEventInput, Event } from "../../../../../__generated__/graphql";

export function EventDeleteButton({ id }: DeleteEventInput) {
  const [deleteEvent, { error }] = useMutation(graphQlNodes.event.delete);
  const dispatch = useDispatch();
  const doDelete = useCallback(() => {
    if (error) {
      return;
    }
    deleteEvent({ variables: { event: { id } as DeleteEventInput } }).then(
      () => {
        dispatch({ type: ACTION_DELETE_ONE_EVENT, payload: { id } });
      }
    );
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
