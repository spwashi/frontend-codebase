import React, {useEffect, useMemo, useRef, useState} from 'react';
import {GraphqlMutationResponse} from '../../../../../services/graphql/GraphqlMutationResponse';
import {useMutationFormSubmitCallback} from '../../../../../services/graphql/hooks/useMutationFormSubmitCallback';
import {form__editConcept, selectEditConceptInput} from '../forms/edit';
import {useEditConceptMutation} from '../mutations/edit';
import {StandardForm} from '../../../../../components/form/Form';
import {LoggedIn} from '../../../../users/behaviors/login/State';
import {IConcept} from '../../../../../models/concept/models';
import {Log} from '../../../../../components/Log';
import {FormContextProvider} from '../../../../../components/form/FormContext';
import {ConceptSelect} from '../../../components/Select';

function ActiveForm() {
    const {send, response}         = useEditConceptMutation();
    const onsubmit                 = useMutationFormSubmitCallback(send, selectEditConceptInput);
    const [{data}, setData]        = useState<any | null>({});
    const concept: IConcept | null = data?.concept ?? null;
    const defaultForm              = useMemo(() => JSON.parse(JSON.stringify(form__editConcept)), []);
    const form                     = useRef(defaultForm)

    const [eff, setEff] = useState({} as any | null);

    const [{data: {concept: _concept} = {} as any} = {} as any, setConcept] = useState({} as any);
    useEffect(() => {
        if (!_concept) return;

        const out = {} as any;
        console.log(form.current)


        form.current
            .items
            .forEach((item: any) => {
                const name = item.name;

                if (eff[name]) item.value = undefined;

                if (name === 'concept') {
                    item.value = _concept;
                    return;
                }
                const val = (_concept as any)[name];
                if (!_concept.hasOwnProperty(name)) return;


                out[name]  = val;
                item.value = val
            })
        setEff(out)
    }, [_concept]);
    return (
        <>
            <FormContextProvider onChange={setConcept}>
                <ConceptSelect formKey="concept"/>
            </FormContextProvider>
            {_concept && <StandardForm form={form.current} onSubmit={onsubmit} onChange={setData}/>}
            <GraphqlMutationResponse response={response}/>
        </>
    )
}

export function EditConceptForm({}) {
    return (
        <LoggedIn>
            <ActiveForm/>
        </LoggedIn>

    );
}
