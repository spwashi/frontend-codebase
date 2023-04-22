import React, { useState } from "react";
import { useMutationForm } from "@services/graphql/hooks/useMutationForm";
import { FormWidget } from "@widgets/form/FormWidget";
import { form__selectEvent } from "@features/events/behaviors/select/config";
import { form__editEvent } from "@features/events/behaviors/edit/config";
import { GraphqlMutationResponse } from "@services/graphql/components/api/GraphqlMutationResponse";
import { IFormContextState } from "@widgets/form/context/types/state";
import { graphQlNodes } from "@/graphql/nodes";
import { Event } from "@generated/graphql";

export function EventEditForm() {
  const [onsubmit, response] = useMutationForm(
    graphQlNodes.event.edit,
    (formState) => formState
  );
  const [formState, setFormState] =
    useState<IFormContextState<{ event: Event["id"] }>>();

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
