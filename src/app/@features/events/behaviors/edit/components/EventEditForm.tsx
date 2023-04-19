import { useEditEventMutation } from "@features/events/services/graphql/one/mutations/edit";
import { useMutationFormSubmitCallback } from "@services/graphql/hooks/useMutationFormSubmitCallback";
import { selectEditEventInput } from "@features/events/behaviors/edit/selectors";
import { Log } from "@core/dev/components/Log";
import { FormWidget } from "@widgets/form/FormWidget";
import { form__selectEvent } from "@features/events/behaviors/select/config";
import { form__editEvent } from "@features/events/behaviors/edit/config";
import { GraphqlMutationResponse } from "@services/graphql/components/api/GraphqlMutationResponse";
import React from "react";
import { useEventSelectForm } from "@features/events/behaviors/select/hooks/useEventSelectForm";

export function EventEditForm() {
  const { send, response } = useEditEventMutation();
  const onsubmit = useMutationFormSubmitCallback(send, selectEditEventInput);
  const [event, setEventFromForm] = useEventSelectForm();
  return (
    <div>
      <FormWidget config={form__selectEvent} onSubmit={setEventFromForm} />
      {event && (
        <FormWidget
          config={form__editEvent}
          onSubmit={onsubmit}
          defaultValue={event}
        />
      )}
      <GraphqlMutationResponse response={response} />
    </div>
  );
}
