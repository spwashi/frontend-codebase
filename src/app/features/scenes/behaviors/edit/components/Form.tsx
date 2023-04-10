import React, {useState} from 'react';
import {GraphqlMutationResponse} from '../../../../../services/graphql/GraphqlMutationResponse';
import {useMutationFormSubmitCallback} from '../../../../../services/graphql/hooks/useMutationFormSubmitCallback';
import {form__editScene, selectEditSceneInput} from '../config';
import {useEditSceneMutation} from '../mutation';
import {StandardForm} from '../../../../../components/form/Form';
import {LoggedIn} from '../../../../users/behaviors/login/Requirement';
import {Form} from '../../../../../components/form/context/FormContext';
import {SceneSelect} from '../../../components/form/Select';
import {formClassNames} from '../../../../../components/form/styles/classNames';

function EditSceneForm() {
  const {send, response}  = useEditSceneMutation();
  const onsubmit          = useMutationFormSubmitCallback(send, selectEditSceneInput);
  const [{data}, setData] = useState<any | null>({});

  const [{data: {scene: _scene} = {} as any} = {} as any, setScene] = useState({} as any);
  return (
    <>
      <section className={formClassNames.formWrapper}>
        <header>Select Scene To Edit <small className="dev-only">scene-edit-select</small></header>
        <Form onChange={setScene}>
          <div className="input-wrapper">
            <label>Scene</label>
            <div className="form-item">
              <SceneSelect formKey="scene"/>
            </div>
          </div>
        </Form>
      </section>
      {
        _scene &&
        <StandardForm
          config={form__editScene}
          onSubmit={onsubmit}
          onChange={setData}
          defaultValue={_scene}
        />
      }
      <GraphqlMutationResponse response={response}/>
    </>
  )
}

export function RestrictedEditSceneForm({}) {
  return (
    <LoggedIn>
      <EditSceneForm/>
    </LoggedIn>

  );
}
