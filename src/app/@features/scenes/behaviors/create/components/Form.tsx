import React from 'react';
import {GraphqlMutationResponse} from '@services/graphql/components/api/GraphqlMutationResponse';
import {useMutationFormSubmitCallback} from '@services/graphql/hooks/useMutationFormSubmitCallback';
import {form__createScene} from '../config';
import {useCreateSceneMutation} from '../mutation';
import {FormWidget} from '@widgets/form/FormWidget';
import {LoggedIn} from '@features/users/behaviors/login/components/Requirement';
import {Feature} from '@services/features/item/components/Feature';
import {selectCreateSceneInput} from '@features/scenes/behaviors/create/selectors';
import {feature_sceneCreateForm} from '../../../../../@/featureIds';

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

export function CreateSceneFormFeature() {
  return (
      <Feature name={feature_sceneCreateForm}>
        <CreateSceneForm/>
      </Feature>
  );
}
