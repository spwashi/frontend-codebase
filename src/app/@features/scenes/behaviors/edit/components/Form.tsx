import React, {useState} from 'react';
import {GraphqlMutationResponse} from '@services/graphql/components/api/GraphqlMutationResponse';
import {useMutationFormSubmitCallback} from '@services/graphql/hooks/useMutationFormSubmitCallback';
import {form__editScene} from '../config';
import {useEditSceneMutation} from '../mutation';
import {FormWidget} from '@widgets/form/FormWidget';
import {formClassNames} from '@widgets/form/styles/classNames';
import {Feature} from '@services/features/item/components/Feature';
import {selectEditSceneInput} from '@features/scenes/behaviors/edit/selectors';
import {feature_sceneEditForm} from '../../../../../@/featureIds';

function useSceneSelectForm() {
  const [{data: {scene: scene} = {} as any} = {} as any, setScene] = useState({} as any);
  return [scene, setScene];
}
function EditSceneForm() {
  const {send, response}  = useEditSceneMutation();
  const onsubmit          = useMutationFormSubmitCallback(send, selectEditSceneInput);
  const [scene, setScene] = useSceneSelectForm();
  return (
    <>
      <section className={formClassNames.formWrapper}>
        <header>Select Scene To Edit <small className="dev-only">scene-edit-select</small></header>
      </section>
      {
        scene &&
        <FormWidget config={form__editScene} onSubmit={onsubmit} onChange={setScene} defaultValue={scene}/>
      }
      <GraphqlMutationResponse response={response}/>
    </>
  )
}

export function EditSceneFormFeature() {
  return (
    <Feature name={feature_sceneEditForm}>
      <EditSceneForm/>
    </Feature>
  );
}
