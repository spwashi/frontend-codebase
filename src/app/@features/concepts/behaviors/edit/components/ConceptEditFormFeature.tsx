import React, {useState} from 'react';
import {GraphqlMutationResponse} from '@services/graphql/components/api/GraphqlMutationResponse';
import {useMutationFormSubmitCallback} from '@services/graphql/hooks/useMutationFormSubmitCallback';
import {form__editConcept} from '../config';
import {useEditConceptMutation} from '../../../services/graphql/one/mutations/edit';
import {FormWidget} from '@widgets/form/FormWidget';
import {Log} from '@core/dev/components/Log';
import {Feature} from '@services/features/item/components/Feature';
import {ListQuery} from '@features/concepts/services/graphql/list/components/ListQuery';
import {selectEditConceptInput} from '@features/concepts/behaviors/edit/selectors';
import {featureId__conceptEditForm} from '../../../../../@/featureIds';

function useConceptEditForm() {
  const [{data: {concept: concept} = {} as any} = {} as any, setConceptSelectionFormData] = useState({} as any);
  return [concept, setConceptSelectionFormData];
}

function EditConceptFormInternal() {
  const {send, response}              = useEditConceptMutation();
  const onsubmit                      = useMutationFormSubmitCallback(send, selectEditConceptInput);
  const [concept, setConceptFromForm] = useConceptEditForm();

  return (
    <React.Fragment>
      <Log title={'Concept'}>{concept}</Log>
      <FormWidget config={form__editConcept} onSubmit={setConceptFromForm}/>
    {
      concept && (
        <FormWidget config={form__editConcept} onSubmit={onsubmit} defaultValue={concept}/>
      )
    }
      <GraphqlMutationResponse response={response}/>
    </React.Fragment>
  )
}

export function ConceptEditFormFeature() {
  return (
    <Feature name={featureId__conceptEditForm}>
      <ListQuery/>
      <EditConceptFormInternal/>
    </Feature>
  );
}
