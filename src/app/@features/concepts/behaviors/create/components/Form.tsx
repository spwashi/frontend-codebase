import React from 'react';
import {GraphqlMutationResponse} from '@services/graphql/components/api/GraphqlMutationResponse';
import {useMutationFormSubmitCallback} from '@services/graphql/hooks/useMutationFormSubmitCallback';
import {form__createConcept} from '../config';
import {useCreateConceptMutation} from '../mutation';
import {FormWidget} from '@widgets/form/FormWidget';
import {LoggedIn} from '@features/users/behaviors/login/components/Requirement';
import {ErrorBoundary} from '@core/error/components/ErrorBoundary';
import {Feature} from '@services/features/item/components/Feature';
import {createConceptFormFeatureName} from '@features/concepts/features';
import {selectCreateConceptInput} from '@features/concepts/behaviors/create/selectors';

function ActiveForm() {
  const {send, response} = useCreateConceptMutation();
  const onsubmit         = useMutationFormSubmitCallback(send, selectCreateConceptInput);
  return (
    <ErrorBoundary>
      <FormWidget config={form__createConcept} onSubmit={onsubmit}/>
      <GraphqlMutationResponse response={response}/>
    </ErrorBoundary>
  )
}

export function CreateConceptForm() {
  return (
    <LoggedIn>
      <Feature name={createConceptFormFeatureName}>
        <ActiveForm/>
      </Feature>
    </LoggedIn>
  );
}
