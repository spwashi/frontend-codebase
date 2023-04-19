import {useEditSceneMutation} from '@features/scenes/services/graphql/one/mutations/edit';
import {useMutationFormSubmitCallback} from '@services/graphql/hooks/useMutationFormSubmitCallback';
import {selectEditSceneInput} from '@features/scenes/behaviors/edit/selectors';
import {formClassNames} from '@widgets/form/styles/classNames';
import {FormWidget} from '@widgets/form/FormWidget';
import {form__editScene} from '@features/scenes/behaviors/edit/config';
import {GraphqlMutationResponse} from '@services/graphql/components/api/GraphqlMutationResponse';
import React, {useState} from 'react';

function useSceneSelectForm() {
  const [{data: {scene: scene} = {} as any} = {} as any, setScene] = useState({} as any);
  return [scene, setScene];
}
export function SceneEditForm() {
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