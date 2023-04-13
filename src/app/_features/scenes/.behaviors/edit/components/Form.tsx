import React, {useState} from 'react';
import {GraphqlMutationResponse} from '../../../../../_services/graphql/components/api/GraphqlMutationResponse';
import {useMutationFormSubmitCallback} from '../../../../../_services/graphql/hooks/useMutationFormSubmitCallback';
import {form__editScene, selectEditSceneInput} from '../config';
import {useEditSceneMutation} from '../mutation';
import {FormWidget} from '../../../../../_widgets/form/FormWidget';
import {LoggedIn} from '../../../../users/.behaviors/login/components/Requirement';
import {SceneSelect} from '../../../components/form/Select';
import {formClassNames} from '../../../../../_widgets/form/styles/classNames';
import {Form} from '../../../../../_widgets/form/components/Form';

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
        <FormWidget
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
