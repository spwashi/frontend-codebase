import React from 'react';
import {GraphqlMutationResponse} from '../../../../../.services/graphql/GraphqlMutationResponse';
import {useMutationFormSubmitCallback} from '../../../../../.services/graphql/hooks/useMutationFormSubmitCallback';
import {form__createEvent, selectCreateEventInput} from '../config';
import {useCreateEventMutation} from '../mutation';
import {FormWidget} from '../../../../../widgets/form/FormWidget';
import {LoggedIn} from '../../../../@users/behaviors/login/Requirement';

function ActiveForm() {
  const {send, response} = useCreateEventMutation();
  const onsubmit         = useMutationFormSubmitCallback(send, selectCreateEventInput);
  return (
    <>
      <FormWidget config={form__createEvent} onSubmit={onsubmit}/>
      <GraphqlMutationResponse response={response}/>
    </>
  )
}

export function CreateEventForm({}) {
  return (
    <LoggedIn>
      <ActiveForm/>
    </LoggedIn>
  );
}
