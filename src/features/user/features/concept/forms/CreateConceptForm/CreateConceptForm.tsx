import React from 'react';
import {gql, useMutation} from '@apollo/client';
import {FormContextProvider} from '../../../../../../components/form/FormContext';
import {GraphqlMutationResponse} from '../../../../../../services/graphql/GraphqlMutationResponse';
import {UserSelector} from '../../../../components/UserSelector';
import {useMutationFormSubmitCallback} from '../../../../../../services/graphql/hooks/useMutationFormSubmitCallback';
import {Input, Textarea} from '../../../../../../components/form/input/text/Input';
import {SelectInput} from '../../../../../../components/form/input/select/SelectInput';

// Define mutation
const CREATE_CONCEPT = gql`
    mutation CreateConcept($title: String!, $src:String!, $user: UserInput!, $mimeType: String) {
        createConcept(concept: {author: $user, title: $title, src: $src, mimeType: $mimeType}) {
            title
            src
        }
    }
`;

function selectMutationInput(data: any) {
    const {username, title, src} = data ?? {};
    return {
        title,
        src,
        user: {username},
    };
}

function UsernameInput({doSelect = false}: { doSelect?: boolean }) {
    return <>
        {
            doSelect
            ? <UserSelector formKey="username"/>
            : <Input formKey="username" placeholder="Username"/>
        }
    </>;
}
export function CreateConceptForm() {
    const [send, response] = useMutation(CREATE_CONCEPT);
    const onsubmit         = useMutationFormSubmitCallback(send, selectMutationInput);
    return (
        <section id="form__concept-create">
            <header>Create Concept Form</header>
            <FormContextProvider onSubmit={onsubmit}>
                <UsernameInput doSelect/>
                <Input formKey="title" placeholder="Concept title"/>
                <Textarea formKey="src" placeholder="Concept contents"/>
                <SelectInput formKey="mimeType" placeholder="Mime Type" options={['text/plain']}/>
                <button type="submit">submit</button>
                <GraphqlMutationResponse response={response}/>
            </FormContextProvider>
        </section>
    )
}
