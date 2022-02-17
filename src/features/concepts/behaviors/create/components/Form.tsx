import React from 'react';
import {GraphqlMutationResponse} from '../../../../../services/graphql/GraphqlMutationResponse';
import {useMutationFormSubmitCallback} from '../../../../../services/graphql/hooks/useMutationFormSubmitCallback';
import {form__createConcept, selectCreateConceptInput} from '../config';
import {useCreateConceptMutation} from '../mutation';
import {StandardForm} from '../../../../../components/form/Form';
import {LoggedIn} from '../../../../users/behaviors/login/Requirement';

function ActiveForm() {
    const {send, response} = useCreateConceptMutation();
    const onsubmit         = useMutationFormSubmitCallback(send, selectCreateConceptInput);
    return (
        <>
            <StandardForm config={form__createConcept} onSubmit={onsubmit}/>
            <GraphqlMutationResponse response={response}/>
        </>
    )
}

export function CreateConceptForm({}) {
    return (
        <LoggedIn>
            <ActiveForm/>
        </LoggedIn>
    );
}
