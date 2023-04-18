import React from 'react';
import {GraphqlMutationResponse} from '@services/graphql/components/api/GraphqlMutationResponse';
import {useMutationFormSubmitCallback} from '@services/graphql/hooks/useMutationFormSubmitCallback';
import {form__createEvent} from '../config';
import {useCreateEventMutation} from '../../../services/graphql/one/mutations/create';
import {FormWidget} from '@widgets/form/FormWidget';
import {Feature} from '@services/features/item/components/Feature';
import {selectCreateEventInput} from '@features/events/behaviors/create/selectors';
import {featureId__eventCreateForm} from '../../../../../@/featureIds';

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
    <Feature name={featureId__eventCreateForm}>
      <CreateEventForm/>
    </Feature>
  );
}
