import React from 'react';
import {FormContextProvider} from '../../../../../components/form/FormContext';
import {GraphqlMutationResponse} from '../../../../../services/graphql/GraphqlMutationResponse';
import {useMutationFormSubmitCallback} from '../../../../../services/graphql/hooks/useMutationFormSubmitCallback';
import {FeatureRequirement} from '../../../../../util/features';
import {form__createProject, selectCreateProjectInput} from '../selectors/selectCreationInput';
import {useCreateProjectMutation} from '../mutations/useCreateMutation';
import {FormBody} from '../../../../../components/form/Factory';


function ActiveForm() {
    const {send, response} = useCreateProjectMutation();
    const onsubmit         = useMutationFormSubmitCallback(send, selectCreateProjectInput);
    return (
        <section id="form__project-create">
            <header>Create Project Form</header>
            <FormContextProvider onSubmit={onsubmit}>
                <FormBody items={form__createProject}/>
                <GraphqlMutationResponse response={response}/>
            </FormContextProvider>
        </section>
    )
}

export function CreateProjectForm() {
    return (
        <FeatureRequirement name="users.login">
            <ActiveForm/>
        </FeatureRequirement>
    );
}
