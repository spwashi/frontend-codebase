import React from 'react';
import {GraphqlMutationResponse} from '../../../../../_services/graphql/components/api/GraphqlMutationResponse';
import {useMutationFormSubmitCallback} from '../../../../../_services/graphql/hooks/useMutationFormSubmitCallback';
import {form__createConcept, selectCreateConceptInput} from '../config';
import {useCreateConceptMutation} from '../mutation';
import {FormWidget} from '../../../../../_widgets/form/FormWidget';
import {LoggedIn} from '../../../../users/behaviors/login/components/Requirement';
import {ErrorBoundary} from '../../../../../components/error/ErrorBoundary';


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
