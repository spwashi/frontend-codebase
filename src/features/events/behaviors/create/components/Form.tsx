import React from 'react';
import {GraphqlMutationResponse} from '../../../../../services/graphql/GraphqlMutationResponse';
import {useMutationFormSubmitCallback} from '../../../../../services/graphql/hooks/useMutationFormSubmitCallback';
import {form__createEvent, selectCreateEventInput} from '../config';
import {useCreateEventMutation} from '../mutation';
import {StandardForm} from '../../../../../components/form/Form';
import {LoggedIn} from '../../../../users/behaviors/login/Requirement';

function ActiveForm() {
    const {send, response} = useCreateEventMutation();
    const onsubmit         = useMutationFormSubmitCallback(send, selectCreateEventInput);
    return (
        <>
            <StandardForm config={form__createEvent} onSubmit={onsubmit}/>
            <GraphqlMutationResponse response={response}/>
        </>
    )
}

export function CreateEventForm({}) {
    return (
        <LoggedIn>
            <ActiveForm/>
        </LoggedIn>
    );
}
