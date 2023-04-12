import {useTagMutation} from '../mutation';
import {useMutationFormSubmitCallback} from '../../../../../services/graphql/hooks/useMutationFormSubmitCallback';
import {form__tagEvent, selectTagAdditionInput} from '../config';
import {GraphqlMutationResponse} from '../../../../../services/graphql/GraphqlMutationResponse';
import React from 'react';
import {StandardForm} from '../../../../../components/form/Form';

export function TagEventForm() {
  const {send, response} = useTagMutation();
  const onsubmit         = useMutationFormSubmitCallback(send, selectTagAdditionInput);
  return (
    <section id="form__event-tag">
      <StandardForm config={form__tagEvent} onSubmit={onsubmit}/>
      <GraphqlMutationResponse response={response}/>
    </section>
  )
}