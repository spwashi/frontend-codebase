import React from 'react';
import {GraphqlMutationResponse} from '../../../../../.services/.graphql/components/GraphqlMutationResponse';
import {useMutationFormSubmitCallback} from '../../../../../.services/.graphql/hooks/useMutationFormSubmitCallback';
import {form__createScene, selectCreateSceneInput} from '../config';
import {useCreateSceneMutation} from '../mutation';
import {FormWidget} from '../../../../../.widgets/.form/FormWidget';
import {LoggedIn} from '../../../../.users/behaviors/login/Requirement';

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