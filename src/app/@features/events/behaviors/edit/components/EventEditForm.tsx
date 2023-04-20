import React, { useState } from "react";
import { useEditEventMutation } from "@features/events/services/graphql/one/mutations/edit";
import { useMutationFormSubmitCallback } from "@services/graphql/hooks/useMutationFormSubmitCallback";
import { selectEditEventInput } from "@features/events/behaviors/edit/selectors";
import { FormWidget } from "@widgets/form/FormWidget";
import { form__selectEvent } from "@features/events/behaviors/select/config";
import { form__editEvent } from "@features/events/behaviors/edit/config";
import { GraphqlMutationResponse } from "@services/graphql/components/api/GraphqlMutationResponse";
import { useEventSelectForm } from "@features/events/behaviors/select/hooks/useEventSelectForm";
import { IFormContextState } from "@widgets/form/context/types/state";

export function EventEditForm() {
  const { send, response } = useEditEventMutation();
  const onsubmit = useMutationFormSubmitCallback(send, selectEditEventInput);
  const [formState, setFormState] = useState<IFormContextState>();
  const event = formState?.currentValue?.event;
  return (
    <div>
      <FormWidget config={form__selectEvent} onSubmit={setFormState} />
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
