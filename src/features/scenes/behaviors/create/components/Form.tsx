import React from 'react';
import {GraphqlMutationResponse} from '../../../../../services/graphql/GraphqlMutationResponse';
import {useMutationFormSubmitCallback} from '../../../../../services/graphql/hooks/useMutationFormSubmitCallback';
import {form__createScene, selectCreateSceneInput} from '../config';
import {useCreateSceneMutation} from '../mutation';
import {StandardForm} from '../../../../../components/form/Form';
import {LoggedIn} from '../../../../users/behaviors/login/Requirement';

function CreateSceneForm() {
    const {send, response} = useCreateSceneMutation();
    const onsubmit         = useMutationFormSubmitCallback(send, selectCreateSceneInput);
    return (
        <>
            <StandardForm form={form__createScene} onSubmit={onsubmit}/>
            <GraphqlMutationResponse response={response}/>
        </>
    )
}

export function RestrictedCreateSceneForm({}) {
    return (
        <LoggedIn>
            <CreateSceneForm/>
        </LoggedIn>
    );
}
