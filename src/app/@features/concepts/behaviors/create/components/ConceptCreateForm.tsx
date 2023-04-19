import {useCreateConceptMutation} from '@features/concepts/services/graphql/one/mutations/create';
import {useMutationFormSubmitCallback} from '@services/graphql/hooks/useMutationFormSubmitCallback';
import {selectCreateConceptInput} from '@features/concepts/behaviors/create/selectors';
import {ErrorBoundary} from '@core/error/components/ErrorBoundary';
import {FormWidget} from '@widgets/form/FormWidget';
import {form__createConcept} from '@features/concepts/behaviors/create/config';
import {GraphqlMutationResponse} from '@services/graphql/components/api/GraphqlMutationResponse';
import React from 'react';

export function ConceptCreateForm() {
  const {send, response} = useCreateConceptMutation();
  const onsubmit         = useMutationFormSubmitCallback(send, selectCreateConceptInput);
  return (
    <ErrorBoundary>
      <FormWidget config={form__createConcept} onSubmit={onsubmit}/>
      <GraphqlMutationResponse response={response}/>
    </ErrorBoundary>
  )
}