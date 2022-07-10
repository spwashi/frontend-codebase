import React from 'react';
import {GraphqlMutationResponse} from '../../../../../services/graphql/GraphqlMutationResponse';
import {useMutationFormSubmitCallback} from '../../../../../services/graphql/hooks/useMutationFormSubmitCallback';
import {form__createConcept, selectCreateConceptInput} from '../config';
import {useCreateConceptMutation} from '../mutation';
import {StandardForm} from '../../../../../components/form/Form';
import {LoggedIn} from '../../../../users/behaviors/login/Requirement';
import {ErrorBoundary} from '../../../../../components/error';



function ActiveForm() {
    const {send, response} = useCreateConceptMutation();
    const onsubmit         = useMutationFormSubmitCallback(send, selectCreateConceptInput);
    return (
        <ErrorBoundary>
            <StandardForm config={form__createConcept} onSubmit={onsubmit}/>
            <GraphqlMutationResponse response={response}/>
        </ErrorBoundary>
    )
}

export function CreateConceptForm({}) {
    return (
        <LoggedIn>
            <ActiveForm/>
        </LoggedIn>
    );
}
