import {useTagMutation} from '../mutation';
import {useMutationFormSubmitCallback} from '../../../../../.services/.graphql/hooks/useMutationFormSubmitCallback';
import {form__tagConcept, selectTagAdditionInput} from '../config';
import {GraphqlMutationResponse} from '../../../../../.services/.graphql/components/api/GraphqlMutationResponse';
import React from 'react';
import {FormWidget} from '../../../../../.widgets/.form/FormWidget';

export function TagConceptForm() {
  const {send, response} = useTagMutation();
  const onsubmit         = useMutationFormSubmitCallback(send, selectTagAdditionInput);
  return (
    <section id="form__concept-tag">
      <FormWidget config={form__tagConcept} onSubmit={onsubmit}/>
      <GraphqlMutationResponse response={response}/>
    </section>
  )
}