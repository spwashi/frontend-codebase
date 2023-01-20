import React, {useState} from 'react';
import {GraphqlMutationResponse} from '../../../../../services/graphql/GraphqlMutationResponse';
import {useMutationFormSubmitCallback} from '../../../../../services/graphql/hooks/useMutationFormSubmitCallback';
import {form__editConcept, selectEditConceptInput} from '../config';
import {useEditConceptMutation} from '../mutation';
import {StandardForm} from '../../../../../components/form/Form';
import {LoggedIn} from '../../../../users/behaviors/login/Requirement';
import {Form} from '../../../../../components/form/context/FormContext';
import {ConceptSelect} from '../../../components/form/Select';
import {Log} from '../../../../../components/Log';

export function EditConceptForm() {
    const {send, response}  = useEditConceptMutation();
    const onsubmit          = useMutationFormSubmitCallback(send, selectEditConceptInput);
    const [{data}, setData] = useState<any | null>({});

    const [{data: {concept: _concept} = {} as any} = {} as any, setConcept] = useState({} as any);
    return (
        <div style={{border: 'thin solid red'}}>
            <Log title={'Concept'}>{_concept}</Log>
            <Form onChange={setConcept}>
                <ConceptSelect formKey="concept"/>
            </Form>
            {
                _concept && (
                    <StandardForm
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

export function RestrictedEditConceptForm({}) {
    return (
        <LoggedIn>
            <EditConceptForm/>
        </LoggedIn>
    );
}
