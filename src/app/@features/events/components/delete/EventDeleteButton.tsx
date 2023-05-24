import { useDispatch } from "react-redux";
import React, { useCallback } from "react";
import { useMutation } from "@apollo/client";
import { Log } from "@core/dev/components/Log";
import { graphQlNodes } from "@identities/graphql/nodes";
import { DeleteEventInput } from "@generated/graphql";
import { ACTION_DELETE_ONE_EVENT } from "../../services/redux/reducer";
import { Feature } from "@widgets/feature";
import { featureIds } from "@identities/features/ids";

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
    <Feature name={featureIds.event.delete}>
      {error ? (
        <Log title="Event Delete Error">{{ error }}</Log>
      ) : (
        <button onClick={() => doDelete()}>Delete Event</button>
      )}
    </Feature>
  );
}
