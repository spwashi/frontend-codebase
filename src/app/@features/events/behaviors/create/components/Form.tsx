import React from 'react';
import {GraphqlMutationResponse} from '@services/graphql/components/api/GraphqlMutationResponse';
import {useMutationFormSubmitCallback} from '@services/graphql/hooks/useMutationFormSubmitCallback';
import {form__createEvent} from '../config';
import {useCreateEventMutation} from '../mutation';
import {FormWidget} from '@widgets/form/FormWidget';
import {Feature} from '@services/features/item/components/Feature';
import {eventCreateFormFeatureName} from '@features/events/features';
import {selectCreateEventInput} from '@features/events/behaviors/create/selectors';

function CreateEventForm() {
  const {send, response} = useCreateEventMutation();
  const onsubmit         = useMutationFormSubmitCallback(send, selectCreateEventInput);
  return (
    <>
      <FormWidget config={form__createEvent} onSubmit={onsubmit}/>
      <GraphqlMutationResponse response={response}/>
    </>
  )
}

export function CreateEventFormFeature() {
  return (
    <Feature name={eventCreateFormFeatureName}>
      <CreateEventForm/>
    </Feature>
  );
}
