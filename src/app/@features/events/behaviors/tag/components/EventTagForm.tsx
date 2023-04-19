import {useTagMutation} from '../../../services/graphql/one/mutations/tag';
import {useMutationFormSubmitCallback} from '@services/graphql/hooks/useMutationFormSubmitCallback';
import {form__tagEvent} from '../config';
import {GraphqlMutationResponse} from '@services/graphql/components/api/GraphqlMutationResponse';
import React from 'react';
import {FormWidget} from '@widgets/form/FormWidget';
import {selectTagAdditionInput} from '@features/events/behaviors/tag/selectors';

export function EventTagForm() {
  const {send, response} = useTagMutation();
  const onsubmit         = useMutationFormSubmitCallback(send, selectTagAdditionInput);
  return (
    <section id="form__event-tag">
      <FormWidget config={form__tagEvent} onSubmit={onsubmit}/>
      <GraphqlMutationResponse response={response}/>
    </section>
  )
}