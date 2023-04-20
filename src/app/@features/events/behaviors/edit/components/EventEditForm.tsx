import React, { useState } from "react";
import { gqlNode_EVENT_EDIT } from "@features/events/services/graphql/one/mutations/edit";
import { useMutationForm } from "@services/graphql/hooks/useMutationForm";
import { selectEditEventInput } from "@features/events/behaviors/edit/selectors";
import { FormWidget } from "@widgets/form/FormWidget";
import { form__selectEvent } from "@features/events/behaviors/select/config";
import { form__editEvent } from "@features/events/behaviors/edit/config";
import { GraphqlMutationResponse } from "@services/graphql/components/api/GraphqlMutationResponse";
import { IFormContextState } from "@widgets/form/context/types/state";

export function EventEditForm() {
  const [onsubmit, response] = useMutationForm(
    gqlNode_EVENT_EDIT,
    selectEditEventInput
  );
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
