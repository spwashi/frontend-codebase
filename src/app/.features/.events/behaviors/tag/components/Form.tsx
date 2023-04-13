import {useTagMutation} from '../mutation';
import {useMutationFormSubmitCallback} from '../../../../../.services/.graphql/hooks/useMutationFormSubmitCallback';
import {form__tagEvent, selectTagAdditionInput} from '../config';
import {GraphqlMutationResponse} from '../../../../../.services/.graphql/components/GraphqlMutationResponse';
import React from 'react';
import {FormWidget} from '../../../../../.widgets/@form/FormWidget';

export function TagEventForm() {
  const {send, response} = useTagMutation();
  const onsubmit         = useMutationFormSubmitCallback(send, selectTagAdditionInput);
  return (
    <section id="form__event-tag">
      <FormWidget config={form__tagEvent} onSubmit={onsubmit}/>
      <GraphqlMutationResponse response={response}/>
    </section>
  )
}