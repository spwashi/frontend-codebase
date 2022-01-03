import React, {useMemo} from 'react';
import {FormContextProvider} from '../../../../../components/form/FormContext';
import {GraphqlMutationResponse} from '../../../../../services/graphql/GraphqlMutationResponse';
import {useMutationFormSubmitCallback} from '../../../../../services/graphql/hooks/useMutationFormSubmitCallback';
import {FeatureRequirement} from '../../../../../util/features';
import {selectCreateConceptInput} from '../selectors/selectCreationInput';
import {useCreateConceptMutation} from '../mutations/useCreateMutation';
import {FormBody} from '../../../../../components/form/Factory';

function ActiveForm() {
    const {send, response} = useCreateConceptMutation();
    const onsubmit         = useMutationFormSubmitCallback(send, selectCreateConceptInput);
    const options          = useMemo(() => ['text/plain', 'text/spw'].map(title => ({title, value: title})), []);
    return (
        <section id="form__concept-create">
            <header>Create Concept Form</header>
            <FormContextProvider onSubmit={onsubmit}>
                <FormBody items={[
                    {title: 'User', name: 'user', type: 'user'},
                    {title: 'Concept Title', name: 'title', type: 'text'},
                    {title: 'Concept Contents', name: 'src', type: 'text'},
                    {title: 'Mime Type', name: 'mimeType', type: 'select', options},
                ]}/>
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
