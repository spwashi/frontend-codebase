import React, {useState} from 'react';
import {GraphqlMutationResponse} from '@services/graphql/components/api/GraphqlMutationResponse';
import {useMutationFormSubmitCallback} from '@services/graphql/hooks/useMutationFormSubmitCallback';
import {form__editConcept, selectEditConceptInput} from '../config';
import {useEditConceptMutation} from '../mutation';
import {FormWidget} from '@widgets/form/FormWidget';
import {LoggedIn} from '@features/users/behaviors/login/components/Requirement';
import {ConceptSelect} from '../../../components/form/Select';
import {Log} from '@core/dev/components/Log';
import {formClassNames} from '@widgets/form/styles/classNames';
import {Form} from '@widgets/form/components/Form';

export function EditConceptForm() {
  const {send, response}  = useEditConceptMutation();
  const onsubmit          = useMutationFormSubmitCallback(send, selectEditConceptInput);
  const [, setData] = useState<any | null>({});

  const [{data: {concept: _concept} = {} as any} = {} as any, setConcept] = useState({} as any);
  return (
    <div style={{border: 'thin solid red'}}>
      <Log title={'Concept'}>{_concept}</Log>
      <section className={formClassNames.formWrapper}>
        <header>Select Concept To Edit <small className="dev-only">concept-edit-select</small></header>
        <Form onChange={setConcept}>
          <div className="input-wrapper">
            <label>Concept</label>
            <div className="form-item">
              <ConceptSelect formKey="concept"/>
            </div>
          </div>
        </Form>
      </section>
      {
        _concept && (
          <FormWidget
            config={form__editConcept}
            onSubmit={onsubmit}
            onChange={setData}
            defaultValue={_concept}
          />
        )}
      <GraphqlMutationResponse response={response}/>
    </div>
  )
}

export function RestrictedEditConceptForm() {
  return (
    <LoggedIn>
      <EditConceptForm/>
    </LoggedIn>
  );
}