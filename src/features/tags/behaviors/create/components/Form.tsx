import React from 'react';
import {FormContextProvider} from '../../../../../components/form/FormContext';
import {GraphqlMutationResponse} from '../../../../../services/graphql/GraphqlMutationResponse';
import {useMutationFormSubmitCallback} from '../../../../../services/graphql/hooks/useMutationFormSubmitCallback';
import {Input, Textarea} from '../../../../../components/form/input/text/Input';
import {FeatureRequirement} from '../../../../../util/features';
import {selectCreateTagInput} from '../selectors/selectCreationInput';
import {UsernameInput} from './input/UsernameInput';
import {useCreateTagMutation} from '../mutations/useCreateMutation';

function ActiveForm() {
    const {send, response} = useCreateTagMutation();
    const onsubmit         = useMutationFormSubmitCallback(send, selectCreateTagInput);
    return (
        <section id="form__tag-create">
            <header>Create Tag Form</header>
            <FormContextProvider onSubmit={onsubmit}>
                <>
                    <UsernameInput doSelect/>
                    <Input formKey="title" placeholder="Tag title"/>
                    <Input formKey="domain" placeholder="Tag domain"/>
                    <Textarea formKey="description" placeholder="Tag description"/>
                </>

                <button type="submit">submit</button>

                <GraphqlMutationResponse response={response}/>
            </FormContextProvider>
        </section>
    )
}

export function CreateTagForm() {
    return (
        <FeatureRequirement name="users.login">
            <ActiveForm/>
        </FeatureRequirement>
    );
}
