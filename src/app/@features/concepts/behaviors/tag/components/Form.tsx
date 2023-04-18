import {useTagMutation} from '../../../services/graphql/one/mutations/tag';
import {useMutationFormSubmitCallback} from '@services/graphql/hooks/useMutationFormSubmitCallback';
import {form__tagConcept} from '../config';
import {GraphqlMutationResponse} from '@services/graphql/components/api/GraphqlMutationResponse';
import React from 'react';
import {FormWidget} from '@widgets/form/FormWidget';
import {selectTagAdditionInput} from '@features/concepts/behaviors/tag/selectors';

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