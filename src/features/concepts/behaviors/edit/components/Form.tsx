import React from 'react';
import {GraphqlMutationResponse} from '../../../../../services/graphql/GraphqlMutationResponse';
import {useMutationFormSubmitCallback} from '../../../../../services/graphql/hooks/useMutationFormSubmitCallback';
import {FeatureRequirement} from '../../../../_util';
import {form__editConcept, selectEditConceptInput} from '../forms/edit';
import {useEditConceptMutation} from '../mutations/edit';
import {StandardForm} from '../../../../../components/form/Form';

function ActiveForm() {
    const {send, response} = useEditConceptMutation();
    const onsubmit         = useMutationFormSubmitCallback(send, selectEditConceptInput);
    return (
        <>
            <StandardForm form={form__editConcept} onSubmit={onsubmit}/>
            <GraphqlMutationResponse response={response}/>
        </>
    )
}

export function EditConceptForm({}) {
    return (
        <FeatureRequirement name="users.login">
            <ActiveForm/>
        </FeatureRequirement>
    );
}
