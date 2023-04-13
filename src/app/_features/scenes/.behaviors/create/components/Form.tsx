import React from 'react';
import {GraphqlMutationResponse} from '../../../../../_services/graphql/components/api/GraphqlMutationResponse';
import {useMutationFormSubmitCallback} from '../../../../../_services/graphql/hooks/useMutationFormSubmitCallback';
import {form__createScene, selectCreateSceneInput} from '../config';
import {useCreateSceneMutation} from '../mutation';
import {FormWidget} from '../../../../../_widgets/form/FormWidget';
import {LoggedIn} from '../../../../users/.behaviors/login/components/Requirement';

function CreateSceneForm() {
  const {send, response} = useCreateSceneMutation();
  const onsubmit         = useMutationFormSubmitCallback(send, selectCreateSceneInput);
  return (
    <>
      <FormWidget config={form__createScene} onSubmit={onsubmit}/>
      <GraphqlMutationResponse response={response}/>
    </>
  )
}

export function RestrictedCreateSceneForm({}) {
  return (
    <LoggedIn>
      <CreateSceneForm/>
    </LoggedIn>
  );
}
