import React from 'react';
import {GraphqlMutationResponse} from '../../../../../.services/.graphql/components/GraphqlMutationResponse';
import {useMutationFormSubmitCallback} from '../../../../../.services/.graphql/hooks/useMutationFormSubmitCallback';
import {form__createConcept, selectCreateConceptInput} from '../config';
import {useCreateConceptMutation} from '../mutation';
import {FormWidget} from '../../../../../.widgets/.form/FormWidget';
import {LoggedIn} from '../../../../.users/behaviors/login/Requirement';
import {ErrorBoundary} from '../../../../../components/util/error/ErrorBoundary';


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

export function CreateConceptForm({}) {
  return (
    <LoggedIn>
      <ActiveForm/>
    </LoggedIn>
  );
}
