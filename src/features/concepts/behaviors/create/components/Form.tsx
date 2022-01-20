import React from 'react';
import {GraphqlMutationResponse} from '../../../../../services/graphql/GraphqlMutationResponse';
import {useMutationFormSubmitCallback} from '../../../../../services/graphql/hooks/useMutationFormSubmitCallback';
import {FeatureRequirement} from '../../../../_util';
import {form__createConcept, selectCreateConceptInput} from '../config';
import {useCreateConceptMutation} from '../mutation';
import {StandardForm} from '../../../../../components/form/Form';

function ActiveForm() {
    const {send, response} = useCreateConceptMutation();
    const onsubmit         = useMutationFormSubmitCallback(send, selectCreateConceptInput);
    return (
        <>
            <StandardForm form={form__createConcept} onSubmit={onsubmit}/>
            <GraphqlMutationResponse response={response}/>
        </>
    )
}

export function CreateConceptForm({}) {
    return (
        <FeatureRequirement name="users.login">
            <ActiveForm/>
        </FeatureRequirement>
    );
}
