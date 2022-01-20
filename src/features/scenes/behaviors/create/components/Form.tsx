import React from 'react';
import {GraphqlMutationResponse} from '../../../../../services/graphql/GraphqlMutationResponse';
import {useMutationFormSubmitCallback} from '../../../../../services/graphql/hooks/useMutationFormSubmitCallback';
import {FeatureRequirement} from '../../../../_util';
import {form__createScene, selectCreateSceneInput} from '../config';
import {useCreateSceneMutation} from '../mutation';
import {StandardForm} from '../../../../../components/form/Form';
import {LoggedIn} from '../../../../users/behaviors/login/State';

function ActiveForm() {
    const {send, response} = useCreateSceneMutation();
    const onsubmit         = useMutationFormSubmitCallback(send, selectCreateSceneInput);
    return (
        <>
            <StandardForm form={form__createScene} onSubmit={onsubmit}/>
            <GraphqlMutationResponse response={response}/>
        </>
    )
}

export function CreateSceneForm({}) {
    return (
        <LoggedIn>
            <ActiveForm/>
        </LoggedIn>
    );
}
