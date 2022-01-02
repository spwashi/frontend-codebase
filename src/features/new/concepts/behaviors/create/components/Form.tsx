import React, {useMemo} from 'react';
import {FormContextProvider} from '../../../../../../components/form/FormContext';
import {GraphqlMutationResponse} from '../../../../../../services/graphql/GraphqlMutationResponse';
import {useMutationFormSubmitCallback} from '../../../../../../services/graphql/hooks/useMutationFormSubmitCallback';
import {Input, Textarea} from '../../../../../../components/form/input/text/Input';
import {SelectInput} from '../../../../../../components/form/input/select/SelectInput';
import {FeatureRequirement} from '../../../../../../util/features';
import {selectCreateConceptInput} from '../selectors/selectCreationInput';
import {UsernameInput} from './input/UsernameInput';
import {useCreateConceptMutation} from '../mutations/useCreateMutation';

function ActiveForm() {
    const {send, response} = useCreateConceptMutation();
    const onsubmit         = useMutationFormSubmitCallback(send, selectCreateConceptInput);
    const options          = useMemo(() => ['text/plain', 'text/spw'].map(title => ({title, value: title})), []);
    return (
        <section id="form__concept-create">
            <header>Create Concept Form</header>
            <FormContextProvider onSubmit={onsubmit}>
                <>
                    <UsernameInput doSelect/>
                    <Input formKey="title" placeholder="Concept title"/>
                    <Textarea formKey="src" placeholder="Concept contents"/>
                    <SelectInput formKey="mimeType" placeholder="Mime Type" options={options}/>
                </>

                <button type="submit">submit</button>

                <GraphqlMutationResponse response={response}/>
            </FormContextProvider>
        </section>
    )
}

export function CreateConceptForm() {
    return (
        <FeatureRequirement name="users.login">
            <ActiveForm/>
        </FeatureRequirement>
    );
}
