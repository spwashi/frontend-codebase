import {useCreateEventMutation} from '@features/events/services/graphql/one/mutations/create';
import {useMutationFormSubmitCallback} from '@services/graphql/hooks/useMutationFormSubmitCallback';
import {selectCreateEventInput} from '@features/events/behaviors/create/selectors';
import {FormWidget} from '@widgets/form/FormWidget';
import {form__createEvent} from '@features/events/behaviors/create/config';
import {GraphqlMutationResponse} from '@services/graphql/components/api/GraphqlMutationResponse';
import React from 'react';

export function EventCreateForm() {
  const {send, response} = useCreateEventMutation();
  const onsubmit         = useMutationFormSubmitCallback(send, selectCreateEventInput);
  return (
    <>
      <FormWidget config={form__createEvent} onSubmit={onsubmit}/>
      <GraphqlMutationResponse response={response}/>
    </>
  )
}